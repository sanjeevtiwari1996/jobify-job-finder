import JobCard from '../components/JobCard.jsx'
import EmptyState from '../components/EmptyState.jsx'
import { useJobs } from '../context/JobsContext.jsx'

export default function Saved() {
  const { savedIds, jobs } = useJobs()
  const savedJobs = jobs.filter(j => savedIds.includes(j.id))

  if (savedJobs.length === 0) {
    return <EmptyState title="No saved jobs" subtitle="Save jobs to view them here." />
  }

  return (
    <section className="space-y-4">
      <h2 className="text-xl font-semibold">Saved Jobs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {savedJobs.map(job => <JobCard key={job.id} job={job} />)}
      </div>
    </section>
  )
}
