from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.generate import router as generate_router

app = FastAPI(
    title="Copilot Challenge API",
    description="Backend for comparing AI-generated code with and without Copilot Instructions",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:5175",
        "http://127.0.0.1:5173",
        "http://127.0.0.1:5175",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(generate_router)

@app.get("/")
def root():
    return {"message": "Copilot Challenge API is running"}