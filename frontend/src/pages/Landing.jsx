import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-transparent to-purple-900/20"></div>
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-500/30 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="animate-float inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-gray-300 mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          <span>Powered by Google Gemini AI</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">Copilot Challenge</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-4 max-w-2xl mx-auto leading-relaxed">
          See the difference GitHub Copilot Instructions make in AI-generated code quality.
        </p>

        <p className="text-base text-gray-500 mb-12 max-w-xl mx-auto">
          Enter a prompt and compare code generated with and without Copilot Instructions —
          and discover why well-crafted instructions produce cleaner, more professional code.
        </p>

        <Link
          to="/demo"
          className="inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold rounded-xl gradient-bg hover:gradient-bg-hover text-white transition-all duration-200 shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:-translate-y-0.5"
        >
          <span>Start Demo</span>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          {[
            { icon: '🎯', title: 'Compare Outputs', desc: 'Side-by-side view of generated code quality' },
            { icon: '📋', title: 'Smart Instructions', desc: 'Copilot best practices automatically applied' },
            { icon: '⚡', title: 'Real-time Generation', desc: 'AI-powered code generation via Gemini API' },
          ].map((item) => (
            <div key={item.title} className="glass rounded-2xl p-6 text-left hover:bg-white/[0.08] transition-all duration-200">
              <span className="text-3xl mb-3 block">{item.icon}</span>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
