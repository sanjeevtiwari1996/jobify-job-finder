export default function EmptyState({ title="No results", subtitle="Try changing your search or filters." }) {
  return (
    <div className="rounded-2xl border bg-white p-10 text-center">
      <h3 className="text-lg font-semibold text-slate-800">{title}</h3>
      <p className="text-slate-600 mt-2">{subtitle}</p>
    </div>
  )
}
