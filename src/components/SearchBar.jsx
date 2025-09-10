import { useJobs } from '../context/JobsContext.jsx'

export default function SearchBar() {
  const { query, setQuery, setPage } = useJobs()
  return (
    <div className="flex-1">
      <input
        type="text"
        value={query}
        onChange={(e) => { setQuery(e.target.value); setPage(1); }}
        placeholder="Search by role, company, or skills..."
        className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-sky-400"
      />
    </div>
  )
}
