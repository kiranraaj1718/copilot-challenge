import requests
from config.settings import OLLAMA_HOST, OLLAMA_MODEL

COPILOT_INSTRUCTIONS = (
    "You are GitHub Copilot. Generate professional production-ready React code. "
    "Use React Functional Components, Tailwind CSS, reusable components, "
    "clean architecture, meaningful variable names, validation, accessibility, "
    "comments, responsive design, modular structure, and proper error handling."
)


def _generate(prompt: str) -> str:
    try:
        response = requests.post(
            f"{OLLAMA_HOST}/api/generate",
            json={
                "model": OLLAMA_MODEL,
                "prompt": prompt,
                "stream": False,
                "options": {"temperature": 0.2},
            },
            timeout=120,
        )
        response.raise_for_status()
        return response.json()["response"].strip()
    except requests.exceptions.ConnectionError:
        raise RuntimeError(
            "Cannot connect to Ollama. Make sure Ollama is running locally.\n"
            "Download from: https://ollama.com/download"
        )
    except requests.exceptions.Timeout:
        raise RuntimeError("Ollama took too long to respond. Try a simpler prompt.")
    except Exception as e:
        raise RuntimeError(f"Ollama error: {str(e)}")


def generate_without_instructions(prompt: str) -> str:
    return _generate(prompt)


def generate_with_instructions(prompt: str) -> str:
    full_prompt = f"{COPILOT_INSTRUCTIONS}\n\nUser Prompt: {prompt}"
    return _generate(full_prompt)
