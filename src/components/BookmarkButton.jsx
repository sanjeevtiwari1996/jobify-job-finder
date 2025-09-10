import { useJobs } from '../context/JobsContext.jsx'

export default function BookmarkButton({ id }) {
  const { isSaved, toggleSave } = useJobs()
  const saved = isSaved(id)
  return (
    <button
      onClick={() => toggleSave(id)}
      className={`rounded-lg px-3 py-2 border ${saved ? 'bg-sky-50 border-sky-300 text-sky-700' : 'bg-white text-slate-700'}`}
      title={saved ? 'Remove bookmark' : 'Save job'}
    >
      {saved ? 'Saved' : 'Save'}
    </button>
  )
}
