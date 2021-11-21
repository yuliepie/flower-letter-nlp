from fastapi import FastAPI
from app import main_router


app = FastAPI()

@app.on_event("startup")
async def app_init():
    """Initialize application services"""
    app.db = AsyncIOMotorClient(CONFIG.mongo_uri).account
    await init_beanie(app.db, document_models=[User])

app.include_router(main_router)
