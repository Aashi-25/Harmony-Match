
from fastapi import APIRouter, UploadFile, File, HTTPException, Depends, Request
from motor.motor_asyncio import AsyncIOMotorClient
from app.db.mongodb import get_db
import os
from dotenv import load_dotenv
from omnidimension import Client, APIError
from typing import Dict
router = APIRouter()

# Webhook endpoint for OmniDim
@router.post("/webhook/omnidim")
async def omnidim_webhook(request: Request):
    data = await request.json()
    print("Received OmniDim webhook data:", data)
    # You can process/store the data as needed here
    return {"status": "received"}

load_dotenv()



OMNIDIM_API_KEY = os.getenv('OMNIDIM_API_KEY', 'your-omnidim-api-key')
client = Client(api_key=OMNIDIM_API_KEY)
print("OmniDim Client attributes:", dir(client))
print("OmniDim Agent attributes:", dir(client.agent))
AGENT_ID = "8717"  # Your agent_id from the dashboard

@router.post("/process")
async def process_voice(file: UploadFile = File(...), question: str = None, db: AsyncIOMotorClient = Depends(get_db)):
    try:
        audio_content = await file.read()
        # Use SDK to process audio with the agent
        response = client.agent.process(
            agent_id=AGENT_ID,
            audio=audio_content,
            mime_type='audio/wav',
            context={"question": question}
        )
        response_data = {
            "text": response.get("transcription", ""),
            "sentiment": response.get("sentiment", "neutral"),
            "tags": response.get("tags", []) or []
        }
        # Store response in MongoDB
        await db.harmony_match.voice_responses.insert_one({
            "question": question,
            "response": response_data
        })
        return response_data
    except APIError as e:
        print(f"OmniDim API Error ({e.status_code}): {e.message}")
        raise HTTPException(status_code=500, detail=f"OmniDim API Error ({e.status_code}): {e.message}")
    except Exception as e:
        print(f"Internal Server Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/adaptive")
async def get_adaptive_question(data: Dict, db: AsyncIOMotorClient = Depends(get_db)):
    responses = data.get("responses", {})
    last_response = responses.get(str(len(responses) - 1), {})
    tags = last_response.get("tags", [])
    text = last_response.get("text", "").lower()
    if "NIGHT_OWL" in tags or "late" in text:
        question = "Would you prefer a roommate with a similar late-night schedule?"
    elif "messy" in text:
        question = "Would you be okay living with someone who keeps things super clean?"
    else:
        question = "Would you prefer a private space, or are you open to sharing?"
    await db.harmony_match.adaptive_questions.insert_one({
        "responses_so_far": responses,
        "adaptive_question": question
    })
    return {"question": question}

@router.post("/submit")
async def submit_survey(data: Dict, db: AsyncIOMotorClient = Depends(get_db)):
    responses = data.get("responses", {})
    structured_profile = {
        "sleep_time": responses.get("0", {}).get("text", "Unknown"),
        "cleanliness_level": responses.get("1", {}).get("text", "Unknown"),
        "social_energy": responses.get("2", {}).get("text", "Unknown"),
        "adaptive_1": responses.get("3", {}).get("text", ""),
        "adaptive_2": responses.get("4", {}).get("text", ""),
    }
    try:
        await db.harmony_match.profiles.insert_one(structured_profile)
        return {"status": "success", "profile": structured_profile}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))