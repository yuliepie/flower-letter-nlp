"""
FastAPI server configuration
"""

from decouple import config
from pydantic import BaseModel


class Settings(BaseModel):
    """Server config settings"""

    # Database settings
    mysql_uri = config("SQLALCHEMY_DATABASE_URL")
    mongo_uri = config("MONGO_URI")


CONFIG = Settings()
