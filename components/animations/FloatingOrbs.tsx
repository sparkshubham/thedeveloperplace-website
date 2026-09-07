export function FloatingOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -left-20 top-10 h-72 w-72 animate-float rounded-full bg-electric/25 blur-3xl" />
      <div
        className="absolute right-0 top-32 h-80 w-80 animate-float rounded-full bg-violet/20 blur-3xl"
        style={{ animationDelay: '1.5s' }}
      />
      <div
        className="absolute bottom-10 left-1/3 h-64 w-64 animate-float rounded-full bg-cyan-glow/15 blur-3xl"
        style={{ animationDelay: '3s' }}
      />
    </div>
  )
}
