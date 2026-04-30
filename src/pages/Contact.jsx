import './Contact.css'

const contactCards = [
  {
    label: 'Call Us',
    value: '+91 7386162084',
    href: 'tel:+917386162084',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Email',
    value: 'info@madduriads.com',
    href: 'mailto:info@madduriads.com',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" fill="none" stroke="#fff" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '+91 7386162084',
    href: 'https://wa.me/917386162084',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884" />
      </svg>
    ),
  },
]

const supportPoints = [
  {
    title: 'Ad booking help',
    text: 'We help clients submit newspaper ad requests for notices, business ads, property, recruitment, and personal announcements.',
  },
  {
    title: 'Publication guidance',
    text: 'If you are not sure which newspaper to use, we can suggest options based on audience, language, city, and budget.',
  },
  {
    title: 'Quick clarification',
    text: 'Share your requirement once and we can narrow down the right ad type, category, and next steps quickly.',
  },
]

export default function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="container contact-shell">
          <div className="contact-copy">
            <p className="contact-kicker">We're here to help</p>
            <h1>Talk to the Madduri ADS team</h1>
            <p>
              Get quick help with ad booking, publication selection, pricing, and campaign planning.
            </p>
          </div>

          <div className="contact-panel">
            <div className="contact-panel__header">
              <h2>Contact Details</h2>
              <span>Fast response during business hours</span>
            </div>

            <div className="contact-card-list">
              {contactCards.map((item) => (
                <a key={item.label} href={item.href} className="contact-card">
                  <div className="contact-card__icon">{item.icon}</div>
                  <div className="contact-card__body">
                    <span className="contact-card__label">{item.label}</span>
                    <span className="contact-card__value">{item.value}</span>
                  </div>
                </a>
              ))}
            </div>

            <div className="contact-panel__footer">
              <p>
                Have a booking query? We'll guide you to the right newspaper, category, and format.
              </p>
              <a href="https://wa.me/917386162084" className="contact-button">
                Start WhatsApp Chat
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-info-section">
        <div className="container contact-info-grid">
          <article className="contact-info-card">
            <h2>How we support you</h2>
            <div className="contact-info-list">
              {supportPoints.map((point) => (
                <div key={point.title} className="contact-info-item">
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="contact-info-card contact-info-card--accent">
            <h2>What to share when you contact us</h2>
            <ul>
              <li>Category and purpose of the ad</li>
              <li>Preferred newspaper or city, if known</li>
              <li>Phone number, email, and short description</li>
              <li>Any timing or publication date preference</li>
            </ul>
          </aside>
        </div>
      </section>
    </div>
  )
}
