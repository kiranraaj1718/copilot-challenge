from fastapi import APIRouter, HTTPException
from models.schemas import GenerateRequest, GenerateResponse
from services.gemini_service import generate_without_instructions, generate_with_instructions

router = APIRouter()


@router.post("/generate", response_model=GenerateResponse)
def generate_code(request: GenerateRequest):
    try:
        if request.mode == "without":
            code = generate_without_instructions(request.prompt)
        elif request.mode == "with":
            code = generate_with_instructions(request.prompt)
        else:
            raise HTTPException(status_code=400, detail="Invalid mode. Use 'with' or 'without'.")

        return GenerateResponse(generated_code=code)

    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to generate code: {str(e)}")
