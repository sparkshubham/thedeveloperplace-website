import { Link } from 'react-router-dom'

export default function CtaBanner() {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div>
          <h2>Ready to Transform Your Business?</h2>
          <p>
            Book a free demo. We can prepare a UI/UX prototype first, then build
            your complete Admin, Customer, Inventory, HR, and custom modules.
          </p>
        </div>
        <Link className="btn btn--white" to="/contact">
          Book a Demo Now
        </Link>
      </div>
    </section>
  )
}
