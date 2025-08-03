import os
import google.generativeai as genai

def extract_roommate_traits(conversation_text):
    genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
    model = genai.GenerativeModel("models/gemini-1.5-pro-latest")
    prompt = '''
You are an AI assistant tasked with extracting roommate compatibility traits from a user's conversational input. The user has answered questions about their lifestyle preferences. Convert their responses into a structured JSON object with the following fields:
- email: A valid email address (extract from input if provided, otherwise generate a default like "user_XXX@example.com").
- sleep_time: String describing sleep schedule (e.g., "Late Night", "Early Morning").
- cleanliness_level: Integer from 1 (very messy) to 5 (very tidy).
- social_energy: String, one of "Low", "Medium", or "High".
- roommate_sleep_match: Boolean, true if the user prefers a roommate with a similar sleep schedule, false otherwise.
- messy_ok_with_tidy: Boolean, true if the user is okay living with a tidier roommate, false otherwise.
- room_status: Boolean, true if the person has already been allotted a room (already matched), false otherwise.
If a field cannot be determined from the input, set it to a reasonable default (e.g., false for booleans, null for strings). Ensure the output is valid JSON.

Input: {}
Output:
'''.format(conversation_text)
    response = model.generate_content(prompt)
    return response.text
