import { useState, type FormEvent } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>Book a free demo</h1>
          <p>
            Tell us what you need — ecommerce, HR, stock audit, or a full
            multi-module platform. We’ll respond with next steps.
          </p>
        </div>
      </section>

      <section className="section section--light">
        <div className="container contact-grid">
          <form className="contact-form" onSubmit={onSubmit}>
            {sent ? (
              <div className="contact-success" role="status">
                <h2>Thanks — request received</h2>
                <p>
                  The Developer Place team will get back to you shortly. Meanwhile,
                  explore our live demos.
                </p>
              </div>
            ) : (
              <>
                <h2>Book a Free Demo</h2>
                <label>
                  Full name
                  <input name="name" required placeholder="Your name" />
                </label>
                <label>
                  Email
                  <input name="email" type="email" required placeholder="you@company.com" />
                </label>
                <label>
                  Phone
                  <input name="phone" type="tel" placeholder="+91 ..." />
                </label>
                <label>
                  Interested in
                  <select name="interest" defaultValue="stock-audit">
                    <option value="ecommerce">Ecommerce / Admin panel</option>
                    <option value="stock-audit">Stock Audit</option>
                    <option value="hr">HR / Attendance</option>
                    <option value="custom">Custom multi-module system</option>
                  </select>
                </label>
                <label>
                  Message
                  <textarea
                    name="message"
                    rows={4}
                    required
                    placeholder="Describe your business and required modules…"
                  />
                </label>
                <button className="btn btn--primary btn--block" type="submit">
                  Submit request
                </button>
              </>
            )}
          </form>

          <aside className="contact-aside">
            <h2>Talk to us</h2>
            <ul>
              <li>
                <span>Website</span>
                <a href="https://thedeveloperplace.co.in/" rel="noreferrer">
                  thedeveloperplace.co.in
                </a>
              </li>
              <li>
                <span>Focus</span>
                <p>Custom IT systems, panels & demos</p>
              </li>
              <li>
                <span>Working hours</span>
                <p>Mon – Sat · 10:00 AM – 7:00 PM</p>
              </li>
            </ul>
            <div className="map-placeholder" aria-hidden>
              <span>India · Remote & on-site delivery</span>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
