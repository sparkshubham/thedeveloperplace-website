import { demos } from '../data/content'
import DemoCard from '../components/DemoCard'
import CtaBanner from '../components/CtaBanner'

export default function Demos() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Live demos</p>
          <h1>Open ColdFlow, OMNIRETAIL, and more live panels</h1>
          <p>
            Try the flagship ERPs first — cold storage and fashion retail — plus
            ecommerce, HR attendance, and stock audit. We customize the same
            stack for your business.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="demo-grid">
            {demos.map((demo) => (
              <DemoCard key={demo.id} demo={demo} />
            ))}
          </div>

          <aside className="demo-note">
            <h3>Need a similar customized panel?</h3>
            <p>
              We can develop the complete system according to your requirements —
              ColdFlow for cold storage, OMNIRETAIL for clothing and saree
              brands, plus Admin Panel, Customer Panel, Inventory, Stock Audit,
              HR, and other modules. We can prepare a UI/UX prototype first for
              approval, then start development.
            </p>
          </aside>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
