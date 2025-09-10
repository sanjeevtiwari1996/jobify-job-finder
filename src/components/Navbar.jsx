import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="bg-white border-b">
      <nav className="container flex items-center justify-between py-4">
        <Link to="/" className="text-xl font-bold text-sky-600">Jobify</Link>
        <div className="flex items-center gap-6">
          <NavLink to="/" className={({isActive}) => isActive ? 'text-sky-600 font-medium' : 'text-slate-700'}>Jobs</NavLink>
          <NavLink to="/saved" className={({isActive}) => isActive ? 'text-sky-600 font-medium' : 'text-slate-700'}>Saved</NavLink>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-700">GitHub</a>
        </div>
      </nav>
    </header>
  )
}
