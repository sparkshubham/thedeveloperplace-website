import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/Badge'
import { GradientText } from '@/components/animations/GradientText'
import { Reveal } from '@/components/animations/Reveal'
import { Container } from '@/components/ui/Container'

type Props = {
  id?: string
  eyebrow?: string
  title: string
  titleHighlight?: string
  description?: string
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export function Section({
  id,
  eyebrow,
  title,
  titleHighlight,
  description,
  children,
  className,
  containerClassName,
}: Props) {
  return (
    <section id={id} className={cn('section-pad relative', className)}>
      <Container className={containerClassName}>
        <Reveal className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
          {eyebrow ? <Badge className="mb-4">{eyebrow}</Badge> : null}
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
            {title}{' '}
            {titleHighlight ? <GradientText>{titleHighlight}</GradientText> : null}
          </h2>
          {description ? (
            <p className="mt-4 text-base text-slate-400 sm:text-lg">{description}</p>
          ) : null}
        </Reveal>
        {children}
      </Container>
    </section>
  )
}
