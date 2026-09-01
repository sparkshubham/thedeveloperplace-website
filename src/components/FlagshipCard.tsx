import { Link } from 'react-router-dom'
import type { Product } from '../data/content'
import { getDemo } from '../data/content'

type Props = {
  product: Product
}

export default function FlagshipCard({ product }: Props) {
  const demo = getDemo(product.demoId)

  return (
    <article className="flagship-card">
      <span className="flagship-card__badge">Flagship</span>
      <h3>{product.name}</h3>
      <p>{product.short}</p>
      <ul className="tag-list">
        {product.features.slice(0, 4).map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <div className="flagship-card__actions">
        <Link className="btn btn--primary" to={`/products/${product.id}`}>
          Learn more
        </Link>
        {demo && (
          <a className="btn btn--secondary" href={demo.url} target="_blank" rel="noreferrer">
            Open live demo →
          </a>
        )}
      </div>
    </article>
  )
}
