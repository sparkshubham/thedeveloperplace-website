import { Link } from 'react-router-dom'
import {
  catalogProducts,
  flagshipDemos,
  flagshipProducts,
} from '../data/content'
import ProductCard from '../components/ProductCard'
import DemoCard from '../components/DemoCard'
import FlagshipCard from '../components/FlagshipCard'
import CtaBanner from '../components/CtaBanner'

const stats = [
  { value: '2', label: 'Flagship Products' },
  { value: '10+', label: 'Business Solutions' },
  { value: '150+', label: 'Projects Delivered' },
  { value: '24/7', label: 'Support' },
]

const why = [
  {
    title: 'Expert Team',
    text: 'Developers who ship production panels, APIs, and workflows — not just mockups.',
  },
  {
    title: 'Industry ERPs',
    text: 'Flagship systems for cold storage and fashion retail, plus modules you can mix in.',
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
  const featured = catalogProducts.slice(0, 8)

  return (
    <>
      <section className="hero">
        <div className="hero__glow" aria-hidden />
        <div className="container hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Code. Create. Elevate.</p>
            <h1>Industry software that runs the business — not just a website.</h1>
            <p className="hero__lead">
              Flagship products: <strong>ColdFlow</strong> for cold storage ERP
              and <strong>OMNIRETAIL</strong> for clothing, saree, and fashion
              brands. Plus custom admin panels, HR, stock audit, and more.
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
                    <small>ColdFlow</small>
                    <b>76% occ.</b>
                  </div>
                  <div>
                    <small>OMNIRETAIL</small>
                    <b>₹9.2L</b>
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

      <section className="section">
        <div className="container">
          <div className="section__head center">
            <p className="eyebrow">Flagship products</p>
            <h2>ColdFlow and OMNIRETAIL</h2>
            <p>
              Our two strongest live systems — a cold storage ERP and a fashion
              retail OS you can open and try today.
            </p>
          </div>
          <div className="flagship-grid">
            {flagshipProducts.map((product) => (
              <FlagshipCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--light">
        <div className="container">
          <div className="section__head center">
            <p className="eyebrow dark">Also available</p>
            <h2>More business solutions</h2>
            <p>
              Ecommerce, HR, stock audit, schools, gyms, and more — pick a
              module or get a fully customized system around the flagship ERPs.
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
            <h2>Try ColdFlow and OMNIRETAIL now</h2>
            <p>
              Sign in to the flagship panels. More ecommerce, HR, and stock
              audit demos are on the Live Demos page.
            </p>
          </div>
          <div className="demo-grid">
            {flagshipDemos.map((demo) => (
              <DemoCard key={demo.id} demo={demo} />
            ))}
          </div>
          <div className="center-actions">
            <Link className="btn btn--secondary" to="/demos">
              View all live demos →
            </Link>
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
