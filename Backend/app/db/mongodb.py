from motor.motor_asyncio import AsyncIOMotorClient
from app.core.config import settings
from urllib.parse import urlparse

MONGODB_URL = settings.MONGODB_URL
client = AsyncIOMotorClient(MONGODB_URL)

# Extract db name from URL or use a default
parsed = urlparse(MONGODB_URL)
if parsed.path and len(parsed.path) > 1:
    db_name = parsed.path[1:]
else:
    db_name = "harmony_match"
db = client[db_name]
