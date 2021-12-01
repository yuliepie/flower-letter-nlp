"""
FastAPI server configuration
"""

from decouple import config
from pydantic import BaseModel
from fastapi_mail import ConnectionConfig


class Settings(BaseModel):
    """Server config settings"""

    # Database settings
    mysql_uri = config("SQLALCHEMY_DATABASE_URL")
    mongo_uri = config("MONGO_URI")
    mongo_db = config("MONGO_DB")

    # Email settings
    email_config = ConnectionConfig(
        MAIL_USERNAME=config("MAIL_USERNAME"),
        MAIL_PASSWORD=config("MAIL_PASSWORD"),
        MAIL_PORT=config("MAIL_PORT"),
        MAIL_SERVER=config("MAIL_SERVER"),
        MAIL_TLS=config("MAIL_TLS"),
        MAIL_SSL=config("MAIL_SSL"),
        MAIL_FROM=config("MAIL_FROM"),
        USE_CREDENTIALS=config("USE_CREDENTIALS"),
    )


CONFIG = Settings()
