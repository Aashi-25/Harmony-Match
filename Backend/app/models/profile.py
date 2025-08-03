from pydantic import BaseModel, EmailStr
from typing import Optional

class Profile(BaseModel):
    email: EmailStr
    sleep_time: Optional[str] = None
    cleanliness_level: Optional[int] = None
    social_energy: Optional[str] = None
    roommate_sleep_match: bool = False
    messy_ok_with_tidy: bool = False
    room_status: bool = False
