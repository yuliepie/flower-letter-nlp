"""
FastAPI server configuration
"""

from decouple import config
from pydantic import BaseSettings, AnyUrl
from fastapi_mail import ConnectionConfig

import logging
from functools import lru_cache

log = logging.getLogger("uvicorn")


class Settings(BaseSettings):
    """Server config settings"""

    environment: str = config("ENVIRONMENT", "dev")  # defaults to dev env
    testing: bool = config("TESTING", 0)  # whether testing mode

    # Database settings
    sqldb_uri: AnyUrl = config("SQL_DB_DEV")
    mongo_uri: str = config("MONGO_URI")
    mongo_db = config("MONGO_DB_DEV")

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


@lru_cache()
def get_config() -> BaseSettings:
    log.info("Loading config settings from the environment...")
    return Settings()
