import google.generativeai as genai
from config.settings import GEMINI_API_KEY, GEMINI_MODEL

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel(GEMINI_MODEL)

COPILOT_INSTRUCTIONS = (
    "You are GitHub Copilot. Generate professional production-ready React code. "
    "Use React Functional Components, Tailwind CSS, reusable components, "
    "clean architecture, meaningful variable names, validation, accessibility, "
    "comments, responsive design, modular structure, and proper error handling."
)

def _generate(prompt: str) -> str:
    try:
        response = model.generate_content(prompt)
        return response.text
    except Exception as e:
        raise RuntimeError(f"Gemini error: {e}")

def generate_without_instructions(prompt: str) -> str:
    return _generate(prompt)

def generate_with_instructions(prompt: str) -> str:
    return _generate(f"{COPILOT_INSTRUCTIONS}\n\nUser Prompt: {prompt}")