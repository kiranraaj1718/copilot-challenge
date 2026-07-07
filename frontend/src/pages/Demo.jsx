import { useState, useCallback } from 'react'
import { generateWithoutInstructions, generateWithInstructions } from '../services/api'
import OutputCard from '../components/OutputCard'
import ComparisonTable from '../components/ComparisonTable'
import LoadingSpinner from '../components/LoadingSpinner'
import Toast from '../components/Toast'

const EXAMPLES = [
  'Create a Student Registration Form',
  'Create a Login Page',
  'Create a Weather App',
  'Create a Todo Application',
]

export default function Demo() {
  const [prompt, setPrompt] = useState('')
  const [codeWithout, setCodeWithout] = useState('')
  const [codeWith, setCodeWith] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [copiedTarget, setCopiedTarget] = useState(null)
  const [toast, setToast] = useState({ show: false, message: '' })

  const showToast = useCallback((message) => {
    setToast({ show: true, message })
  }, [])

  const handleCopy = useCallback(async (text, target) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedTarget(target)
      showToast('Code copied to clipboard!')
      setTimeout(() => setCopiedTarget(null), 2000)
    } catch {
      showToast('Failed to copy code')
    }
  }, [showToast])

  const handleGenerate = useCallback(async (mode) => {
    if (!prompt.trim()) {
      setError('Please enter a prompt')
      return
    }
    setLoading(true)
    setError('')
    try {
      const result = mode === 'without'
        ? await generateWithoutInstructions(prompt)
        : await generateWithInstructions(prompt)
      if (mode === 'without') setCodeWithout(result)
      else setCodeWith(result)
    } catch {
      setError('Unable to generate code. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [prompt])

  const handleCompare = useCallback(async () => {
    if (!prompt.trim()) {
      setError('Please enter a prompt')
      return
    }
    setLoading(true)
    setError('')
    try {
      const [without, withInstructions] = await Promise.all([
        generateWithoutInstructions(prompt),
        generateWithInstructions(prompt),
      ])
      setCodeWithout(without)
      setCodeWith(withInstructions)
    } catch {
      setError('Unable to generate code. Please try again.')
    } finally {
      setLoading(false)
    }
  }, [prompt])

  const handleClear = useCallback(() => {
    setPrompt('')
    setCodeWithout('')
    setCodeWith('')
    setError('')
  }, [])

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <LoadingSpinner visible={loading} />
      <Toast
        show={toast.show}
        message={toast.message}
        onClose={() => setToast({ show: false, message: '' })}
      />

      <div className="max-w-7xl mx-auto">
        <div className="glass rounded-2xl p-6 md:p-8 mb-8 animate-fadeIn">
          <h2 className="text-2xl font-bold gradient-text mb-2">Enter Your Prompt</h2>
          <p className="text-gray-400 text-sm mb-6">
            Describe the React component you want AI to generate.
          </p>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="e.g. Create a Student Registration Form with full name, email, phone, and submit button..."
            rows={4}
            className="w-full bg-white/5 border border-white/10 rounded-xl p-4 text-gray-200 placeholder-gray-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
          />

          <div className="flex flex-wrap items-center gap-3 mt-4">
            {EXAMPLES.map((example) => (
              <button
                key={example}
                onClick={() => setPrompt(example)}
                className="px-3 py-1.5 text-xs rounded-lg bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200 transition-all border border-white/5"
              >
                {example}
              </button>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <button
              onClick={() => handleGenerate('without')}
              disabled={loading}
              className="px-6 py-3 rounded-xl bg-white/10 text-gray-200 hover:bg-white/20 transition-all disabled:opacity-50 border border-white/10 text-sm font-medium"
            >
              Generate Without Instructions
            </button>
            <button
              onClick={() => handleGenerate('with')}
              disabled={loading}
              className="px-6 py-3 rounded-xl gradient-bg hover:gradient-bg-hover text-white transition-all disabled:opacity-50 text-sm font-medium"
            >
              Generate With Instructions
            </button>
            <button
              onClick={handleCompare}
              disabled={loading}
              className="px-6 py-3 rounded-xl bg-emerald-600/80 hover:bg-emerald-600 text-white transition-all disabled:opacity-50 text-sm font-medium"
            >
              Compare
            </button>
            <button
              onClick={handleClear}
              className="px-6 py-3 rounded-xl bg-red-500/20 text-red-400 hover:bg-red-500/30 transition-all text-sm font-medium"
            >
              Clear
            </button>
          </div>

          {error && (
            <div className="mt-4 flex items-center gap-3 px-4 py-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
              <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{error}</span>
            </div>
          )}
        </div>

        {(codeWithout || codeWith) && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <OutputCard
              title="WITHOUT COPILOT INSTRUCTIONS"
              code={codeWithout}
              onCopy={() => handleCopy(codeWithout, 'without')}
              copied={copiedTarget === 'without'}
            />
            <OutputCard
              title="WITH COPILOT INSTRUCTIONS"
              code={codeWith}
              onCopy={() => handleCopy(codeWith, 'with')}
              copied={copiedTarget === 'with'}
            />
          </div>
        )}

        {codeWithout && codeWith && <ComparisonTable />}
      </div>
    </div>
  )
}
