import { Link } from 'react-router-dom'
import { demos, products } from '../data/content'
import ProductCard from '../components/ProductCard'
import DemoCard from '../components/DemoCard'
import CtaBanner from '../components/CtaBanner'

const stats = [
  { value: '10+', label: 'Business Solutions' },
  { value: '150+', label: 'Projects Delivered' },
  { value: '100+', label: 'Happy Clients' },
  { value: '24/7', label: 'Support' },
]

const why = [
  {
    title: 'Expert Team',
    text: 'Developers who ship production panels, APIs, and workflows — not just mockups.',
  },
  {
    title: 'Custom Solutions',
    text: 'Every module is tailored to your business: ecommerce, HR, stock audit, and more.',
  },
  {
    title: 'Latest Technology',
    text: 'Modern React apps, secure APIs, and scalable databases built for growth.',
  },
  {
    title: 'Reliable Support',
    text: 'From UI/UX prototype to launch — we stay with you through delivery.',
  },
]

export default function Home() {
  const featured = products.slice(0, 8)

  return (
    <>
      <section className="hero">
        <div className="hero__glow" aria-hidden />
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Code. Create. Elevate.</p>
            <h1>
              We Build Digital Solutions That Drive Your Business Forward.
            </h1>
            <p className="hero__lead">
              Custom admin panels, ecommerce systems, HR platforms, stock audit
              tools, and industry software — designed, developed, and delivered
              for real operations.
            </p>
            <div className="hero__actions">
              <Link className="btn btn--primary" to="/contact">
                Book a Demo
              </Link>
              <Link className="btn btn--secondary" to="/demos">
                Explore Live Demos →
              </Link>
            </div>
            <div className="stats">
              {stats.map((item) => (
                <div key={item.label} className="stats__item">
                  <strong>{item.value}</strong>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="hero__visual" aria-hidden>
            <div className="dash">
              <aside className="dash__side">
                <i />
                <i />
                <i />
                <i />
              </aside>
              <div className="dash__main">
                <div className="dash__top">
                  <span />
                  <span />
                </div>
                <div className="dash__cards">
                  <div>
                    <small>Revenue</small>
                    <b>₹2.4L</b>
                  </div>
                  <div>
                    <small>Orders</small>
                    <b>1,284</b>
                  </div>
                </div>
                <div className="dash__chart">
                  <i style={{ height: '45%' }} />
                  <i style={{ height: '70%' }} />
                  <i style={{ height: '55%' }} />
                  <i style={{ height: '88%' }} />
                  <i style={{ height: '62%' }} />
                  <i style={{ height: '75%' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="section__head center">
            <p className="eyebrow dark">Solutions</p>
            <h2>10+ Business Solutions for Every Industry</h2>
            <p>
              From retail ERP and stock audit to HR, ecommerce, schools, and gyms
              — pick a module or get a fully customized system.
            </p>
          </div>
          <div className="product-grid">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} light />
            ))}
          </div>
          <div className="center-actions">
            <Link className="btn btn--primary" to="/products">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Live demos</p>
            <h2>Try full-featured panels we have shipped</h2>
            <p>
              Explore working ecommerce, HR, and stock audit systems. Need the
              same for your business? We customize Admin, Customer, Inventory,
              Attendance, and more.
            </p>
          </div>
          <div className="demo-grid">
            {demos.map((demo) => (
              <DemoCard key={demo.id} demo={demo} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section__head center">
            <p className="eyebrow">Why choose us</p>
            <h2>Built for businesses that need real systems</h2>
          </div>
          <div className="why-grid">
            {why.map((item) => (
              <article key={item.title} className="why-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
