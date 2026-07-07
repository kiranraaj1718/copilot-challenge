import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Landing from './pages/Landing'
import Demo from './pages/Demo'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a1a]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/demo" element={<Demo />} />
      </Routes>
    </div>
  )
}
