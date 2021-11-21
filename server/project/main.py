from fastapi import FastAPI
from app import models, db_engine, main_router

models.Base.metadata.create_all(db_engine)


app = FastAPI()

app.include_router(main_router)
