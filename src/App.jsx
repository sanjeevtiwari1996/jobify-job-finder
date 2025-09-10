import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import JobDetails from './pages/JobDetails.jsx'
import Saved from './pages/Saved.jsx'
import NotFound from './pages/NotFound.jsx'
import { JobsProvider } from './context/JobsContext.jsx'

export default function App() {
  return (
    <JobsProvider>
      <div className="min-h-screen">
        <Navbar />
        <main className="container py-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/job/:id" element={<JobDetails />} />
            <Route path="/saved" element={<Saved />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </JobsProvider>
  )
}
