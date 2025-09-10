import { useJobs } from '../context/JobsContext.jsx'

export default function Filters() {
  const { filters, setFilters, uniqueLocations, uniqueTypes, setPage } = useJobs()

  function update(field, value) {
    setFilters(prev => ({ ...prev, [field]: value }))
    setPage(1)
  }

  return (
    <div className="flex flex-wrap gap-3">
      <select
        value={filters.location}
        onChange={(e)=>update('location', e.target.value)}
        className="rounded-xl border px-3 py-2"
      >
        {uniqueLocations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
      </select>

      <select
        value={filters.type}
        onChange={(e)=>update('type', e.target.value)}
        className="rounded-xl border px-3 py-2"
      >
        {uniqueTypes.map(t => <option key={t} value={t}>{t}</option>)}
      </select>

      <div className="flex items-center gap-2">
        <label className="text-sm text-slate-600">Min Salary (₹ LPA):</label>
        <input
          type="number"
          min="0"
          step="1"
          value={filters.minSalary}
          onChange={(e)=>update('minSalary', e.target.value)}
          className="w-24 rounded-xl border px-3 py-2"
        />
      </div>
    </div>
  )
}
