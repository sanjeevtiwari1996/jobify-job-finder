import { useJobs } from '../context/JobsContext.jsx'

export default function Pagination() {
  const { page, setPage, totalPages } = useJobs()
  if (totalPages <= 1) return null

  const prev = () => setPage(Math.max(1, page - 1))
  const next = () => setPage(Math.min(totalPages, page + 1))

  return (
    <div className="flex items-center justify-center gap-3 mt-6">
      <button onClick={prev} className="rounded-lg border px-3 py-2 disabled:opacity-50" disabled={page===1}>Prev</button>
      <span className="text-sm text-slate-600">Page {page} of {totalPages}</span>
      <button onClick={next} className="rounded-lg border px-3 py-2 disabled:opacity-50" disabled={page===totalPages}>Next</button>
    </div>
  )
}
