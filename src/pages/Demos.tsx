import { demos } from '../data/content'
import DemoCard from '../components/DemoCard'
import CtaBanner from '../components/CtaBanner'

export default function Demos() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Live demos</p>
          <h1>Full flash demos for ecommerce, HR & stock audit</h1>
          <p>
            Try complete panels we provide — Admin, Customer, HR attendance, and
            Stock Audit. We can customize the same stack for your business.
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
              including Admin Panel, Customer Panel, Product Management, Orders,
              Inventory, Stock Audit, HR Management, Attendance, and other
              modules. We can prepare a UI/UX prototype first for approval, then
              start development.
            </p>
          </aside>
        </div>
      </section>

      <CtaBanner />
    </>
  )
}
