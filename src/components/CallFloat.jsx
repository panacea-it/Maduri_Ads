import './CallFloat.css'

export default function CallFloat({ phone }) {
  return (
    <a href={`tel:+${phone}`} className="call-float" aria-label="Call Madduri ADS">
      <span className="call-float__top" aria-hidden="true">
        <svg viewBox="0 0 24 24">
          <path d="M14.5 7 9 12l5.5 5" />
        </svg>
      </span>
      <span className="call-float__body">
        <svg className="call-float__icon" viewBox="0 0 24 24" aria-hidden="true">
          <path
            d="M7 3.5c.7 0 1.2.4 1.5 1l1.5 3c.3.6.2 1.3-.2 1.8l-1.2 1.5c.9 1.8 2.4 3.3 4.2 4.2l1.5-1.2c.5-.4 1.2-.5 1.8-.2l3 1.5c.6.3 1 1 1 1.5 0 2.1-1.7 3.8-3.8 3.8C10.5 20.1 3.9 13.5 3.9 5.3 3.9 3.2 5.6 1.5 7.7 1.5c.5 0 1.2.4 1.5 1Z"
            fill="currentColor"
          />
        </svg>
        <span>Call Us</span>
      </span>
    </a>
  )
}
