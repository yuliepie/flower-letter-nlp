from fastapi import FastAPI
from api import main_router
from motor.motor_asyncio import AsyncIOMotorClient
from beanie import init_beanie
from config import CONFIG


app = FastAPI()


@app.on_event("startup")
async def app_init():
    """Initialize application services"""
    mongo_client = AsyncIOMotorClient(CONFIG.mongo_uri).account
    await init_beanie(mongo_client, document_models=[])

    app.include_router(main_router)
