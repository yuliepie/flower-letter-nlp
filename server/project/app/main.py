from fastapi import FastAPI
from api import main_router
from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie
from config import CONFIG
from models.book import Poem, Flower, Book


app = FastAPI()


@app.on_event("startup")
async def app_init():
    """Initialize application services"""
    mongo_client = AsyncIOMotorClient(CONFIG.mongo_uri)
    await init_beanie(
        mongo_client[CONFIG.mongo_db], document_models=[Poem, Flower, Book]
    )

    app.include_router(main_router)
