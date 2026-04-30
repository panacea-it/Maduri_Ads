import { useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './SubmitAd.css'
import changeOfNameImage2 from '../assets/Images/Change _of_name_2.png'

const bookingSteps = [
  {
    title: 'Share your request',
    text: 'Enter your contact details and a short note about what you want to publish.',
  },
  {
    title: 'We review the details',
    text: 'Our team checks the request and prepares the next guidance for your ad booking.',
  },
  {
    title: 'Confirm and proceed',
    text: 'Once the request is saved, you can review the success message and continue.',
  },
]

const bookingTips = [
  'Keep the wording short and clear for quicker approval.',
  'For notices or legal ads, include the full text exactly as needed.',
  'Add any special instructions in the description box if you have them.',
]

export default function SubmitAd() {
  const location = useLocation()
  const selectedService = location.state?.selectedService || ''
  const selectedImage = location.state?.selectedImage || ''
  const hideIntroSection = [
    'Classifieds',
    'Change of Name',
    'Public notice ads',
    'Wanted Ads',
    'Real estate Ads',
  ].includes(selectedService)
  const hideGuidanceSections = hideIntroSection
  const previewImages = useMemo(() => {
    if (!selectedService || !selectedImage) return []
    if (selectedService === 'Change of Name') {
      return Array.from(new Set([selectedImage, changeOfNameImage2]))
    }
    return [selectedImage]
  }, [selectedService, selectedImage])
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    description: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})
  const [currentPreview, setCurrentPreview] = useState(0)
  const activePreview = previewImages.length > 0 ? currentPreview % previewImages.length : 0

  useEffect(() => {
    if (previewImages.length <= 1) return undefined

    const interval = window.setInterval(() => {
      setCurrentPreview((value) => (value + 1) % previewImages.length)
    }, 5000)

    return () => window.clearInterval(interval)
  }, [previewImages.length])

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm({ ...form, [name]: value })
    if (errors[name]) setErrors({ ...errors, [name]: '' })
  }

  const validateForm = () => {
    const newErrors = {}
    if (!form.name.trim()) newErrors.name = 'Name is required'
    if (!form.phone.trim()) newErrors.phone = 'Phone number is required'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  if (submitted) {
    return (
      <div className="submit-page">
        <div className="success-container">
          <div className="success-popup submit-success-popup" role="status" aria-live="polite">
            <div className="success-popup__icon" aria-hidden="true">
              <svg viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="28" fill="#34a853" />
                <path d="m19 33 8 8 18-20" stroke="#fff" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h2 className="success-popup__title">Request Submitted Successfully!</h2>
            <p className="success-popup__text">
              Our team will contact you shortly with pricing details.
            </p>
            <div className="success-popup__actions">
              <a
                className="success-popup__button success-popup__button--whatsapp"
                href={`https://wa.me/917386162084?text=${encodeURIComponent(
                  `New ad booking request from Madduri ADS website\nName: ${form.name || '-'}\nPhone: ${form.phone || '-'}\nEmail: ${form.email || '-'}\nLocation: ${form.location || '-'}\nDescription: ${form.description || '-'}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
              <button
                className="success-popup__button success-popup__button--orange"
                onClick={() => {
                  setSubmitted(false)
                  setForm({
                    name: '',
                    phone: '',
                    email: '',
                    location: '',
                    description: '',
                  })
                  setErrors({})
                }}
              >
                Submit Another Request
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="submit-page">
      {selectedService && (
        <section
          className={`submit-service-preview submit-service-preview--top${
            selectedService === 'Classifieds' ? ' submit-service-preview--classified' : ''
          }`}
        >
          <div className="container submit-service-preview__inner">
            <div className="submit-service-preview__heading submit-service-preview__heading--selected">
              <span className="submit-service-preview__kicker">Selected service</span>
              <h2>{selectedService} Advertisement</h2>
              <p>Use the form below to send your request for this ad type.</p>
            </div>

            <div className="submit-service-preview__card">
              {previewImages.length > 1 ? (
                <div className="submit-service-preview__slider" aria-label={`${selectedService} preview images`}>
                  <button
                    type="button"
                    className="submit-service-preview__arrow submit-service-preview__arrow--left"
                    onClick={() =>
                      setCurrentPreview((value) => (value - 1 + previewImages.length) % previewImages.length)
                    }
                    aria-label="Previous image"
                  >
                    <span aria-hidden="true">‹</span>
                  </button>

                  <div className="submit-service-preview__viewport">
                    <div
                      className="submit-service-preview__track"
                      style={{ transform: `translateX(-${activePreview * 100}%)` }}
                    >
                      {previewImages.map((image) => (
                        <div className="submit-service-preview__slide" key={image}>
                          <img
                            src={image}
                            alt={selectedService}
                            className="submit-service-preview__image"
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  <button
                    type="button"
                    className="submit-service-preview__arrow submit-service-preview__arrow--right"
                    onClick={() =>
                      setCurrentPreview((value) => (value + 1) % previewImages.length)
                    }
                    aria-label="Next image"
                  >
                    <span aria-hidden="true">›</span>
                  </button>
                </div>
              ) : (
                selectedImage && (
                  <div className="submit-service-preview__image-wrap">
                    <img
                      src={selectedImage}
                      alt={selectedService}
                      className="submit-service-preview__image"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </section>
      )}

      {!hideIntroSection && (
        <section className="submit-hero">
          <div className="container submit-hero__inner">
            <div className="submit-copy">
              <p className="submit-kicker">Fast booking. Clear pricing. Reliable support.</p>
              <h1>Submit your ad request</h1>
              <p>
                Share the details below and we'll prepare the best newspaper options for your campaign.
              </p>
              <div className="submit-stats">
                <div><strong>3</strong><span>Simple steps</span></div>
                <div><strong>12h</strong><span>Average response</span></div>
                <div><strong>50+</strong><span>Newspapers</span></div>
              </div>
            </div>

            <div className="submit-summary">
              <h2>What you'll provide</h2>
              <ul>
                <li>Contact details</li>
                <li>Short request note or ad content</li>
                <li>Any extra instructions you want to share</li>
              </ul>
            </div>
          </div>
        </section>
      )}

      <section className="submit-form-section">
        <div className="container">
          <div className="form-card">
            <div className="form-header">
              <h2 className="form-title">{selectedService ? 'Enquiry Form' : 'Ad Booking Details'}</h2>
              <p className="form-subtitle">
                {selectedService
                  ? `Fill in the details for ${selectedService} and we'll guide the rest`
                  : "Tell us what you want to publish and we'll guide the rest"}
              </p>
            </div>

            <form className="submit-form" onSubmit={handleSubmit}>
              <div className="form-section-group">
                <h3 className="section-label">Personal Information</h3>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name <span className="required">*</span></label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={form.name}
                      onChange={handleChange}
                      className={errors.name ? 'error' : ''}
                    />
                    {errors.name && <span className="error-message">{errors.name}</span>}
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number <span className="required">*</span></label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={form.phone}
                      onChange={handleChange}
                      className={errors.phone ? 'error' : ''}
                    />
                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address <span className="optional">(Optional)</span></label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="location">Location <span className="optional">(Optional)</span></label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="Enter your city or location"
                      value={form.location}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-section-group">
                <h3 className="section-label">Ad Details</h3>

                <div className="form-group">
                  <label htmlFor="description">
                    Ad Description / Content <span className="optional">(Optional)</span>
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    rows="5"
                    placeholder="Enter your ad content or short request note here..."
                    value={form.description}
                    onChange={handleChange}
                  />
                  <span className="field-hint">
                    You can keep this brief or leave it empty if you prefer to share details later.
                  </span>
                </div>
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                <span>Send Details</span>
                <span className="btn-arrow">→</span>
              </button>

              <p className="form-note">
                <span className="note-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <rect x="5" y="10" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.8" />
                    <path d="M8 10V8a4 4 0 0 1 8 0v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    <path d="M12 13.5v2.2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </span>
                Your information is secure and will never be shared
              </p>
            </form>
          </div>
        </div>
      </section>

      {!hideGuidanceSections && (
        <section className="submit-info-section submit-info-section--bottom">
          <div className="container submit-info-grid">
            <article className="submit-info-card">
              <span className="submit-info-kicker">Booking process</span>
              <h2>What happens after you submit the ad request</h2>
              <div className="submit-info-steps">
                {bookingSteps.map((step, index) => (
                  <div key={step.title} className="submit-info-step">
                    <span className="submit-info-step__index">{String(index + 1).padStart(2, '0')}</span>
                    <div>
                      <h3>{step.title}</h3>
                      <p>{step.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <aside className="submit-info-card submit-info-card--accent">
              <h2>Tips for a stronger ad</h2>
              <ul>
                {bookingTips.map((tip) => (
                  <li key={tip}>{tip}</li>
                ))}
              </ul>
            </aside>
          </div>
        </section>
      )}
    </div>
  )
}
