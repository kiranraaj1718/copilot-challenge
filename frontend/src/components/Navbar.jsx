import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <span className="text-2xl">🤖</span>
            <span className="text-xl font-bold gradient-text">Copilot Challenge</span>
          </Link>
          <div className="flex gap-4">
            <Link
              to="/"
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                location.pathname === '/'
                  ? 'gradient-bg text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Home
            </Link>
            <Link
              to="/demo"
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                location.pathname === '/demo'
                  ? 'gradient-bg text-white'
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              }`}
            >
              Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
