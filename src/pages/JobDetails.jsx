import { useParams, Link } from 'react-router-dom'
import { useJobs } from '../context/JobsContext.jsx'
import EmptyState from '../components/EmptyState.jsx'
import BookmarkButton from '../components/BookmarkButton.jsx'

export default function JobDetails() {
  const { id } = useParams()
  const { jobs } = useJobs()
  const job = jobs.find(j => String(j.id) === String(id))

  if (!job) return <EmptyState title="Job not found" subtitle="It may have been removed." />

  return (
    <article className="max-w-3xl mx-auto space-y-4 bg-white border rounded-2xl p-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{job.title}</h1>
          <p className="text-slate-600">{job.company} • {job.location} • {job.type}</p>
        </div>
        <BookmarkButton id={job.id} />
      </div>

      <div className="text-sm text-slate-700">
        <p><strong>Salary:</strong> ₹ {job.salary.min}–{job.salary.max} LPA</p>
        <p><strong>Experience:</strong> {job.experience}</p>
      </div>

      <div>
        <h3 className="font-semibold">About the role</h3>
        <p className="text-slate-700 whitespace-pre-line">{job.description}</p>
      </div>

      <div>
        <h3 className="font-semibold">Key skills</h3>
        <div className="flex flex-wrap gap-2 mt-2">
          {job.skills.map(s => <span key={s} className="text-xs border rounded-lg px-2 py-1">{s}</span>)}
        </div>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <a href={job.applyUrl} target="_blank" rel="noreferrer" className="rounded-xl bg-sky-600 text-white px-4 py-2">Apply Now</a>
        <Link to="/" className="text-sky-600 hover:underline">Back to jobs</Link>
      </div>
    </article>
  )
}
