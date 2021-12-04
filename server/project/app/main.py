from fastapi import FastAPI
from app.api import main_router

from app.db import init_db
from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie
from app.models.book import PoemModel, FlowerModel, BookModel

from app.config import CONFIG


app = FastAPI()


@app.on_event("startup")
async def app_init():
    """Initialize application services"""

    # init SQL db
    init_db()

    # connect mongoDB
    mongo_client = AsyncIOMotorClient(CONFIG.mongo_uri)
    await init_beanie(
        mongo_client[CONFIG.mongo_db],
        document_models=[PoemModel, FlowerModel, BookModel],
    )

    app.include_router(main_router)
