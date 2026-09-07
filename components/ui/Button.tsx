import { forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-r from-electric-bright via-electric to-violet text-white shadow-glow hover:brightness-110 border border-white/10',
  secondary:
    'glass text-slate-100 hover:border-cyan-glow/40 hover:shadow-glow-cyan',
  ghost: 'bg-transparent text-slate-200 hover:bg-white/5',
  outline:
    'border border-electric/40 bg-transparent text-electric-soft hover:bg-electric/10',
}

const sizes: Record<Size, string> = {
  sm: 'h-10 px-4 text-sm',
  md: 'h-12 px-6 text-sm sm:text-base',
  lg: 'h-14 px-8 text-base',
}

export type ButtonProps = {
  variant?: Variant
  size?: Size
  href?: string
  className?: string
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  disabled?: boolean
  onClick?: React.MouseEventHandler
  target?: string
  rel?: string
  'aria-label'?: string
}

export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    {
      variant = 'primary',
      size = 'md',
      href,
      className,
      children,
      type = 'button',
      disabled,
      onClick,
      target,
      rel,
      ...rest
    },
    ref,
  ) {
    const classes = cn(
      'inline-flex items-center justify-center gap-2 rounded-xl font-semibold transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-glow disabled:pointer-events-none disabled:opacity-50',
      variants[variant],
      sizes[size],
      className,
    )

    if (href) {
      const external = href.startsWith('http')
      const hashOnly = href.startsWith('#')
      if (external || hashOnly) {
        return (
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            href={href}
            className={classes}
            target={external ? (target ?? '_blank') : target}
            rel={external ? (rel ?? 'noopener noreferrer') : rel}
            onClick={onClick}
            {...rest}
          >
            {children}
          </a>
        )
      }
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={classes}
          onClick={onClick}
          {...rest}
        >
          {children}
        </Link>
      )
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        type={type}
        className={classes}
        disabled={disabled}
        onClick={onClick}
        {...rest}
      >
        {children}
      </button>
    )
  },
)
