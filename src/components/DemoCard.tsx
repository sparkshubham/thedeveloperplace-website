import type { Demo } from '../data/content'

type Props = {
  demo: Demo
}

export default function DemoCard({ demo }: Props) {
  return (
    <article className="demo-card">
      <span className="demo-card__cat">{demo.category}</span>
      <h3>{demo.title}</h3>
      <p>{demo.description}</p>
      <ul className="tag-list">
        {demo.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
      {(demo.login || demo.password) && (
        <div className="creds">
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
