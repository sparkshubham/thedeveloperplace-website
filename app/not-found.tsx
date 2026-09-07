import { Button } from '@/components/ui/Button'

export default function NotFound() {
  return (
    <div className="container-site flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-soft">404</p>
      <h1 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">Page not found</h1>
      <p className="mt-4 max-w-md text-slate-400">
        The page you are looking for does not exist or has moved.
      </p>
      <Button href="/" className="mt-8">
        Return home
      </Button>
    </div>
  )
}
