import SearchBar from '../components/SearchBar.jsx'
import Filters from '../components/Filters.jsx'
import JobCard from '../components/JobCard.jsx'
import Loader from '../components/Loader.jsx'
import EmptyState from '../components/EmptyState.jsx'
import Pagination from '../components/Pagination.jsx'
import { useJobs } from '../context/JobsContext.jsx'

export default function Home() {
  const { loading, error, pageData, query } = useJobs()

  return (
    <section className="space-y-6">
      <div className="flex flex-col md:flex-row gap-3 md:items-center">
        <SearchBar />
        <Filters />
      </div>

      {loading && <Loader />}
      {error && <EmptyState title="Error" subtitle={error} />}

      {!loading && !error && pageData.length === 0 && (
        <EmptyState title="No jobs found" subtitle={`No results for "${query}".`} />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {pageData.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <Pagination />
    </section>
  )
}
