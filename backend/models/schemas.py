from pydantic import BaseModel


class GenerateRequest(BaseModel):
    prompt: str
    mode: str


class GenerateResponse(BaseModel):
    generated_code: str
