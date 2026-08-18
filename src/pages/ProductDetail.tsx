import { Link, useParams } from 'react-router-dom'
import { demos, products } from '../data/content'
import CtaBanner from '../components/CtaBanner'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)

  if (!product) {
    return (
      <section className="page-hero">
        <div className="container">
          <h1>Product not found</h1>
          <Link className="btn btn--primary" to="/products">
            Back to products
          </Link>
        </div>
      </section>
    )
  }

  const relatedDemo =
    product.id === 'stock-audit'
      ? demos.find((d) => d.id === 'stock-audit')
      : product.id === 'hr-management'
        ? demos.find((d) => d.id === 'kisan-hr')
        : product.id === 'ecommerce'
          ? demos.find((d) => d.id === 'kisan-admin')
          : undefined

  return (
    <>
      <section className="page-hero">
        <div className="container detail-hero">
          <div>
            <p className="eyebrow">{product.category}</p>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
            <div className="hero__actions">
              <Link className="btn btn--primary" to="/contact">
                Book a Demo
              </Link>
              {relatedDemo && (
                <a
                  className="btn btn--secondary"
                  href={relatedDemo.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open live demo →
                </a>
              )}
            </div>
          </div>
          <div className="detail-panel" aria-hidden>
            <div className="detail-panel__bar">
              <span />
              <span />
              <span />
            </div>
            <div className="detail-panel__body">
              <strong>{product.name}</strong>
              <em>Dashboard preview</em>
              <div className="dash__chart">
                <i style={{ height: '50%' }} />
                <i style={{ height: '72%' }} />
                <i style={{ height: '40%' }} />
                <i style={{ height: '85%' }} />
                <i style={{ height: '60%' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container dual">
          <div>
            <h2>Key Features</h2>
            <ul className="feature-list">
              {product.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
          <div>
            <h2>How It Works</h2>
            <ol className="steps-list">
              {product.steps.map((step, i) => (
                <li key={step}>
                  <span>0{i + 1}</span>
                  <p>{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
