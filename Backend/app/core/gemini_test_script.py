import os
import json
from dotenv import load_dotenv
from app.core.gemini_utils import extract_roommate_traits
from app.models.profile import Profile
from motor.motor_asyncio import AsyncIOMotorClient
import asyncio

# Load environment variables
load_dotenv()

# Sample transcript (from your webhook data)
conversation = '''
LLM:Hi! I’m Harmony from HarmonyMatch. I’ll ask you a few quick questions to help find your perfect roommate. Ready? Let’s begin!
user:  Let's begin.
LLM: Great! First question: What time do you usually go to bed and wake up?
user:  Around 12 p m
LLM: So you go to bed around midnight. Would you prefer a roommate with a similar late-night schedule?  [NIGHT_OWL]
user:  No. Not at all.
LLM: Got it! You'd prefer a roommate with a different schedule. Next question: How tidy do you like your room to be?
user:  Absolutely messy.
LLM: Would you be okay living with someone who keeps things super clean? [MESSY]
user:  No. Not at all.
LLM: Understood! You prefer not to live with someone super clean. Now, how do you usually spend your evenings at home?
user:  With me. By late night parties.
LLM: That sounds fun! Would you prefer a private space, or are you open to sharing?
user:  I'm open to sharing.
LLM: Great! Thanks for your answers. We’ll use your responses to match you with someone who fits your lifestyle. Have a great day!
user:  Okay. Thank you.
LLM: You're welcome! If you need anything else, feel free to reach out. Take care!
user:  Can you provide me a JSON format file with all the details I have given you right now?
LLM: I'm unable to create or send files directly. However, I can provide the details in JSON format here, and you can copy it if you'd like. Here it is:
'''

async def main():
    # Extract traits using Gemini
    import re
    gemini_json = extract_roommate_traits(conversation)
    print("Gemini Output:\n", gemini_json)
    # Clean Gemini output: remove triple backticks and 'json' if present
    gemini_json_clean = re.sub(r"^```json|```$", "", gemini_json, flags=re.MULTILINE).strip()
    # Remove any leading/trailing backticks or whitespace
    gemini_json_clean = gemini_json_clean.strip('`').strip()
    profile_dict = json.loads(gemini_json_clean)
    # Validate with Pydantic model
    profile = Profile(**profile_dict)
    print("Validated Profile:", profile.dict())
    # Store in MongoDB
    mongo_url = os.getenv("MONGODB_URL")
    client = AsyncIOMotorClient(mongo_url)
    db = client.harmony_match
    await db.profiles.insert_one(profile.dict())
    print("Profile inserted into MongoDB.")
    client.close()

if __name__ == "__main__":
    asyncio.run(main())
