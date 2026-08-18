import { useMemo, useState } from 'react'
import { products } from '../data/content'
import ProductCard from '../components/ProductCard'
import CtaBanner from '../components/CtaBanner'

const filters = ['All', 'Business', 'Education', 'Operations', 'Finance', 'HR'] as const

export default function Products() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All')

  const list = useMemo(
    () =>
      filter === 'All'
        ? products
        : products.filter((p) => p.category === filter),
    [filter],
  )

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Products</p>
          <h1>Business solutions for every industry</h1>
          <p>
            Explore our ready modules — or ask us to customize a complete system
            with Admin Panel, Customer Panel, APIs, and database.
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="filters" role="tablist" aria-label="Product filters">
            {filters.map((item) => (
              <button
                key={item}
                type="button"
                className={`filter-btn ${filter === item ? 'is-active' : ''}`}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="product-grid">
            {list.map((product) => (
              <ProductCard key={product.id} product={product} light />
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
