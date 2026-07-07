export default function LoadingSpinner({ visible }) {
  if (!visible) return null

  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="glass rounded-2xl p-8 flex flex-col items-center gap-4 animate-fadeIn">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 rounded-full border-4 border-white/10"></div>
          <div className="absolute inset-0 rounded-full border-4 border-t-transparent gradient-bg animate-spin"></div>
        </div>
        <p className="text-sm text-gray-400 animate-pulse">AI is generating code...</p>
      </div>
    </div>
  )
}
