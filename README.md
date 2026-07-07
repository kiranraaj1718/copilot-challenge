# Copilot Challenge

A full-stack web application that demonstrates how GitHub Copilot generates different quality code **with and without Copilot Instructions**. Built with React + Vite + Tailwind CSS (frontend) and FastAPI + Google Gemini AI (backend).

## Features

- **Prompt Input** — Enter a prompt and generate React components via AI
- **Side-by-Side Comparison** — View code generated with and without Copilot Instructions
- **Comparison Table** — See the quality differences across 9 criteria
- **Syntax Highlighting** — Professional code display with copy-to-clipboard
- **Dark Mode UI** — Glassmorphism cards, gradients, and smooth animations
- **Responsive Design** — Works on desktop, tablet, and mobile

## Tech Stack

### Frontend

- React 19
- Vite 6
- Tailwind CSS 3
- React Router 7
- Axios
- react-syntax-highlighter

### Backend

- FastAPI
- Uvicorn
- Pydantic
- Google Gemini AI (genai SDK)
- python-dotenv

## Project Structure

```
copilot-challenge/
├── backend/
│   ├── main.py              # FastAPI entry point
│   ├── routes/
│   │   └── generate.py      # POST /generate endpoint
│   ├── services/
│   │   └── gemini_service.py # Gemini API integration
│   ├── config/
│   │   └── settings.py      # Environment config
│   ├── models/
│   │   └── schemas.py       # Pydantic models
│   ├── requirements.txt
│   └── .env
├── frontend/
│   ├── src/
│   │   ├── components/      # Navbar, OutputCard, ComparisonTable, Toast, LoadingSpinner
│   │   ├── pages/           # Landing, Demo
│   │   └── services/        # api.js (Axios client)
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
└── README.md
```

## Setup Instructions

### Prerequisites

- Node.js 18+
- Python 3.10+
- Google Gemini API key ([get one here](https://aistudio.google.com/apikey))

### Backend Setup

```bash
cd copilot-challenge/backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS / Linux
source venv/bin/activate

pip install -r requirements.txt
```

Create `backend/.env` and add your API key:

```
GEMINI_API_KEY=your_key_here
```

Start the backend:

```bash
uvicorn main:app --reload --port 8000
```

The API will be available at `http://localhost:8000`.

### Frontend Setup

Open a new terminal:

```bash
cd copilot-challenge/frontend
npm install
npm run dev
```

The frontend will be available at `http://localhost:5173`.

## API Endpoints

### POST /generate

Generate React code from a text prompt.

**Request body:**

```json
{
  "prompt": "Create a Login Page",
  "mode": "without"
}
```

**Mode values:**
- `without` — sends only the user's prompt to Gemini
- `with` — prepends Copilot Instructions before the user's prompt

**Response:**

```json
{
  "generated_code": "import React from 'react'..."
}
```

## How It Works

1. Enter a prompt describing a React component
2. Click **Generate Without Instructions** to see raw AI output
3. Click **Generate With Instructions** to see AI output with Copilot best practices
4. Click **Compare** to generate both at once
5. Review the **Comparison Table** to see quality differences across 9 criteria

## Copilot Instructions Used

When mode is `with`, the backend automatically prepends:

> "You are GitHub Copilot. Generate professional production-ready React code. Use React Functional Components, Tailwind CSS, reusable components, clean architecture, meaningful variable names, validation, accessibility, comments, responsive design, modular structure, and proper error handling."

## License

MIT
