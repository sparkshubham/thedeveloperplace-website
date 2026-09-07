export default function Loading() {
  return (
    <div className="container-site section-pad space-y-8" aria-busy="true" aria-label="Loading">
      <div className="h-10 w-48 animate-pulse rounded-full bg-white/10" />
      <div className="h-16 w-full max-w-2xl animate-pulse rounded-2xl bg-white/10" />
      <div className="h-24 w-full max-w-xl animate-pulse rounded-2xl bg-white/5" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-40 animate-pulse rounded-2xl bg-white/5" />
        ))}
      </div>
    </div>
  )
}
