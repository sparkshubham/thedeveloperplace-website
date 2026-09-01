import { Link } from 'react-router-dom'
import type { Product } from '../data/content'

type Props = {
  product: Product
  light?: boolean
}

export default function ProductCard({ product, light }: Props) {
  return (
    <Link
      to={`/products/${product.id}`}
      className={`product-card ${light ? 'product-card--light' : ''}`}
    >
      <span className="product-card__icon" style={{ background: `${product.color}22`, color: product.color }}>
        <svg viewBox="0 0 24 24" fill="none" aria-hidden>
          <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 9h8M8 12h5M8 15h7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
      {product.flagship && <span className="product-card__badge">Flagship</span>}
      <h3>{product.name}</h3>
      <p>{product.short}</p>
      <span className="text-link">Learn more →</span>
    </Link>
  )
}
