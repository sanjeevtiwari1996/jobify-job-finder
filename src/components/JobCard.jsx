import { Link } from 'react-router-dom'
import BookmarkButton from './BookmarkButton.jsx'

export default function JobCard({ job }) {
  return (
    <div className="rounded-2xl bg-white border p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-800">{job.title}</h3>
          <p className="text-slate-600">{job.company} • {job.location}</p>
        </div>
        <BookmarkButton id={job.id} />
      </div>
      <div className="flex flex-wrap gap-2">
        {job.skills.map(s => (
          <span key={s} className="text-xs border rounded-lg px-2 py-1">{s}</span>
        ))}
      </div>
      <div className="text-sm text-slate-600">
        <span className="mr-3">{job.type}</span>
        <span>₹ {job.salary.min}–{job.salary.max} LPA</span>
      </div>
      <p className="text-sm text-slate-700 line-clamp-2">{job.description}</p>
      <div className="flex items-center justify-between pt-2">
        <Link to={`/job/${job.id}`} className="text-sky-600 hover:underline">View details</Link>
        <a href={job.applyUrl} target="_blank" rel="noreferrer" className="rounded-xl bg-sky-600 text-white px-4 py-2">Apply</a>
      </div>
    </div>
  )
}
