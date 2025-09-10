import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getJobs } from '../services/api.js'
import useLocalStorage from '../hooks/useLocalStorage.js'

const JobsContext = createContext()

export function JobsProvider({ children }) {
  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const [query, setQuery] = useState('')
  const [filters, setFilters] = useState({ location: 'All', type: 'All', minSalary: 0 })
  const [page, setPage] = useState(1)
  const pageSize = 8

  const [saved, setSaved] = useLocalStorage('jobify_saved', [])

  useEffect(() => {
    async function load() {
      try {
        setLoading(true)
        const data = await getJobs()
        setJobs(data)
      } catch (e) {
        setError('Failed to load jobs')
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const filtered = useMemo(() => {
    let list = jobs
    if (query) {
      const q = query.toLowerCase()
      list = list.filter(j =>
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q) ||
        j.skills.join(',').toLowerCase().includes(q)
      )
    }
    if (filters.location !== 'All') list = list.filter(j => j.location === filters.location)
    if (filters.type !== 'All') list = list.filter(j => j.type === filters.type)
    if (filters.minSalary > 0) list = list.filter(j => j.salary.min >= Number(filters.minSalary))
    return list
  }, [jobs, query, filters])

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize))
  const pageData = filtered.slice((page - 1) * pageSize, page * pageSize)

  function toggleSave(id) {
    setSaved(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id])
  }

  function isSaved(id) {
    return saved.includes(id)
  }

  const uniqueLocations = useMemo(() => ['All', ...Array.from(new Set(jobs.map(j => j.location)))], [jobs])
  const uniqueTypes = useMemo(() => ['All', ...Array.from(new Set(jobs.map(j => j.type)))], [jobs])

  const value = {
    jobs, loading, error,
    query, setQuery,
    filters, setFilters,
    page, setPage, totalPages, pageData,
    savedIds: saved, toggleSave, isSaved,
    uniqueLocations, uniqueTypes
  }

  return <JobsContext.Provider value={value}>{children}</JobsContext.Provider>
}

export function useJobs() {
  return useContext(JobsContext)
}
