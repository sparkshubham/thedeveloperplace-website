import { Link } from 'react-router-dom'
import { caseStudies, demos, getDemo } from '../data/content'
import CtaBanner from '../components/CtaBanner'

export default function CaseStudies() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Case studies</p>
          <h1>Flagship products and live projects</h1>
          <p>
            ColdFlow and OMNIRETAIL lead the portfolio, alongside ecommerce, HR
            attendance, and stock audit panels you can try today.
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container case-grid">
          {caseStudies.map((item) => (
            <article key={item.id} className="case-card">
              <span className="case-card__industry">{item.industry}</span>
              <h2>{item.title}</h2>
              <p>{item.summary}</p>
              <strong className="case-card__result">{item.result}</strong>
              <div className="case-card__actions">
                {item.demoId ? (
                  <a
                    className="btn btn--primary btn--sm"
                    href={getDemo(item.demoId)?.url ?? '/demos'}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open live demo
                  </a>
                ) : (
                  <Link className="btn btn--primary btn--sm" to="/demos">
                    View related demos
                  </Link>
                )}
                {item.productIds[0] && (
                  <Link className="btn btn--secondary btn--sm" to={`/products/${item.productIds[0]}`}>
                    Learn more
                  </Link>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Also available</p>
            <h2>Open the live demos</h2>
          </div>
          <div className="mini-demo-list">
            {demos.map((demo) => (
              <a
                key={demo.id}
                className="mini-demo"
                href={demo.url}
                target="_blank"
                rel="noreferrer"
              >
                <span>{demo.title}</span>
                <em>Open →</em>
              </a>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
