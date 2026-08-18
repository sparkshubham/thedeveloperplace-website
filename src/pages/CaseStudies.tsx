import { Link } from 'react-router-dom'
import { caseStudies, demos } from '../data/content'
import CtaBanner from '../components/CtaBanner'

export default function CaseStudies() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Case studies</p>
          <h1>Success stories from live projects</h1>
          <p>
            Real systems we built and shipped — including ecommerce, HR
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
                <Link className="btn btn--primary btn--sm" to="/demos">
                  View related demos
                </Link>
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
