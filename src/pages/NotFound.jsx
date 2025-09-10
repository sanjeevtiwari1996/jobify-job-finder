import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="text-center py-20">
      <h1 className="text-2xl font-bold">404 – Page not found</h1>
      <p className="text-slate-600 mt-2">The page you are looking for does not exist.</p>
      <Link to="/" className="text-sky-600 hover:underline mt-4 inline-block">Go home</Link>
    </div>
  )
}
