import os
from dotenv import load_dotenv

load_dotenv()

class Settings:
    MONGODB_URL: str = os.getenv("MONGODB_URL", "mongodb+srv://<username>:<password>@<cluster-url>/<dbname>?retryWrites=true&w=majority")

settings = Settings()
