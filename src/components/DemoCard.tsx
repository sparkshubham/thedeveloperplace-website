import { useState } from 'react'
import type { Demo } from '../data/content'

type Props = {
  demo: Demo
}

export default function DemoCard({ demo }: Props) {
  const shots = demo.gallery?.length
    ? demo.gallery
    : demo.image
      ? [demo.image]
      : []
  const [active, setActive] = useState(0)
  const preview = shots[active] ?? demo.image

  return (
    <article className={`demo-card ${demo.flagship ? 'demo-card--flagship' : ''}`}>
      {preview && (
        <div className="demo-card__media">
          <img src={preview} alt={`${demo.title} preview`} loading="lazy" />
          {shots.length > 1 && (
            <div className="demo-card__thumbs" role="tablist" aria-label={`${demo.title} screenshots`}>
              {shots.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className={i === active ? 'is-active' : ''}
                  aria-label={`Screenshot ${i + 1}`}
                  onClick={() => setActive(i)}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      <span className="demo-card__cat">{demo.category}</span>
      <h3>{demo.title}</h3>
      <p>{demo.description}</p>
      <ul className="tag-list">
        {demo.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      {(demo.login || demo.password || demo.slug) && (
        <div className="creds">
          {demo.slug && (
            <p>
              <span>Slug</span>
              <code>{demo.slug}</code>
            </p>
          )}
          {demo.login && (
            <p>
              <span>Login</span>
              <code>{demo.login}</code>
            </p>
          )}
          {demo.password && (
            <p>
              <span>Password</span>
              <code>{demo.password}</code>
            </p>
          )}
        </div>
      )}
      <a className="btn btn--primary btn--block" href={demo.url} target="_blank" rel="noreferrer">
        Open live demo
      </a>
    </article>
  )
}
