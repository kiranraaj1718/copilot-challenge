import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8000',
  headers: { 'Content-Type': 'application/json' },
})

export async function generateWithoutInstructions(prompt) {
  const { data } = await api.post('/generate', { prompt, mode: 'without' })
  return data.generated_code
}

export async function generateWithInstructions(prompt) {
  const { data } = await api.post('/generate', { prompt, mode: 'with' })
  return data.generated_code
}
