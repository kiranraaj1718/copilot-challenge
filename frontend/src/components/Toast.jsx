import { useEffect } from 'react'

export default function Toast({ message, show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(onClose, 2500)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!show) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slideIn">
      <div className="glass rounded-xl px-6 py-3 flex items-center gap-3 shadow-2xl">
        <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
        </svg>
        <span className="text-sm text-gray-200">{message}</span>
      </div>
    </div>
  )
}
