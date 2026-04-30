import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Home.css'
import heroBg from '../assets/Images/Hero.png'
import processBg from '../assets/Images/Bg2.jpg'
import { newspaperLogos } from '../data/newspapers'

const newspaperCards = Array.from(
  new Map(
    newspaperLogos.map((paper) => [
      paper.name,
      {
        ...paper,
        img: new URL(`../assets/publications/${paper.file}`, import.meta.url).href,
      },
    ]),
  ).values(),
)

const heroNewspaperImage = new URL('../assets/Images/newspaper-stack.png', import.meta.url).href
const classifiedImage = new URL('../assets/Images/classified.png', import.meta.url).href
const changeOfNameImage = new URL('../assets/Images/Change _of_name_2.png', import.meta.url).href
const publicNoticeImage = new URL('../assets/Images/Public_notice.png', import.meta.url).href
const wantedAdsImage = new URL('../assets/Images/wanted_ads.png', import.meta.url).href
const realEstateImage = new URL('../assets/Images/Real_estate.png', import.meta.url).href
const homeSlides = [
  new URL('../assets/Images/Home_page1.png', import.meta.url).href,
  new URL('../assets/Images/Home_page2.png', import.meta.url).href,
  new URL('../assets/Images/Home_page3.png', import.meta.url).href,
]

const services = [
  { label: 'Classifieds', icon: 'classifieds' },
  { label: 'Change of Name', icon: 'name' },
  { label: 'Lost of Birth Correction', icon: 'correction' },
  { label: 'Date of Birth document', icon: 'correction' },
  { label: 'Public notice ads', icon: 'public-notice' },
  { label: 'Court Notices', icon: 'court' },
  { label: 'Wanted Ads', icon: 'wanted' },
  { label: 'Real estate Ads', icon: 'estate' },
  { label: 'Lost of Document', icon: 'correction' },
  { label: 'Lost of Passport', icon: 'correction' },
  { label: 'Lost of Passport Public Notices', icon: 'public-notice' },
  { label: 'Lost of certificate', icon: 'correction' },
  { label: 'Business Offers', icon: 'business' },
  { label: 'Custom Ad Captions', icon: 'caption' },
]

const featuredServiceLabels = new Set([
  'Change of Name',
  'Public notice ads',
  'Wanted Ads',
  'Real estate Ads',
])

const featuredLogos = newspaperCards.slice(0, 10)
const stripLogos = newspaperCards.slice(10, 22)

const valueCards = [
  {
    title: 'Local reach with trust',
    text: 'Print readers still rely on newspapers for verified updates, property listings, recruitment, and public notices.',
  },
  {
    title: 'Fast ad guidance',
    text: 'We help you choose the right category, newspaper, and city edition so your message reaches the right audience.',
  },
  {
    title: 'Simple booking flow',
    text: 'Share your details once and we guide you through the ad format, draft, and publication options without confusion.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Choose your purpose',
    text: 'Select the category that fits your ad, whether it is matrimonial, property, business, notice, or recruitment.',
  },
  {
    step: '02',
    title: 'Pick the paper',
    text: 'We help shortlist the newspaper and edition based on location, audience, and budget.',
  },
  {
    step: '03',
    title: 'Share the details',
    text: 'Send your draft or message and we prepare the booking flow for quick review and submission.',
  },
]

function ServiceIcon({ type }) {
  switch (type) {
    case 'name':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 7h9M6 11h6M6 15h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M17 7.5v9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="m15.5 9 1.5-2 1.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'correction':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7 5.5h8l3 3V18a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V6.5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M9 11.5h6M12 8.5v6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'public-notice':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6.5 5.5h11v13h-11z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8.5 9h7M8.5 12h7M8.5 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'court':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 18h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8 9h8M7 12h10M6 15h12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M9 7V5h6v2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      )
    case 'wanted':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="11" cy="11" r="5.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="m15.5 15.5 3 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    case 'estate':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 11.5 12 6l6 5.5V18H6z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M9.5 18v-4h5v4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      )
    case 'business':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7 7.5h10a1 1 0 0 1 1 1V18H6V8.5a1 1 0 0 1 1-1Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          <path d="M9 7.5V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1.5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      )
    case 'caption':
    case 'classifieds':
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6.5 5.5h11v13h-11z" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8.5 8.5h7M8.5 11.5h7M8.5 14.5h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7 6h10M7 10h7M7 14h8M7 18h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M17 14.5 19 6l-5 2.4" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        </svg>
      )
  }
}

export default function Home() {
  const navigate = useNavigate()
  const [showAllNewspapers, setShowAllNewspapers] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const ctaRef = useRef(null)
  const activeSlide = currentSlide % homeSlides.length

  useEffect(() => {
    const interval = window.setInterval(() => {
      setCurrentSlide((value) => (value + 1) % homeSlides.length)
    }, 3500)

    return () => window.clearInterval(interval)
  }, [])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const goToPreviousSlide = () => {
    setCurrentSlide((value) => (value - 1 + homeSlides.length) % homeSlides.length)
  }

  const goToNextSlide = () => {
    setCurrentSlide((value) => (value + 1) % homeSlides.length)
  }

  const scrollToCta = () => {
    ctaRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const handleServiceClick = (service) => {
    const serviceImages = {
      Classifieds: classifiedImage,
      'Change of Name': changeOfNameImage,
      'Public notice ads': publicNoticeImage,
      'Wanted Ads': wantedAdsImage,
      'Real estate Ads': realEstateImage,
    }

    const selectedImage = serviceImages[service.label]

    if (selectedImage) {
      navigate('/submit-ad', {
        state: {
          selectedService: service.label,
          selectedImage,
        },
      })
      return
    }

    scrollToCta()
  }

  return (
    <div className="home-container">
      <section className="home-top-slider" aria-label="Home page highlights">
        <div className="container">
          <div className="home-top-slider__frame">
            <button
              type="button"
              className="home-top-slider__arrow home-top-slider__arrow--left"
              onClick={goToPreviousSlide}
              aria-label="Previous slide"
            >
              <span aria-hidden="true">‹</span>
            </button>
            <div
              className="home-top-slider__track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {homeSlides.map((slide, index) => (
                <div
                  className={`home-top-slider__slide ${
                    index === activeSlide ? 'home-top-slider__slide--active' : ''
                  }`}
                  key={slide}
                >
                  <img
                    src={slide}
                    alt={`Home page highlight ${index + 1}`}
                    className="home-top-slider__image"
                    loading={index === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                  />
                </div>
              ))}
            </div>
            <button
              type="button"
              className="home-top-slider__arrow home-top-slider__arrow--right"
              onClick={goToNextSlide}
              aria-label="Next slide"
            >
              <span aria-hidden="true">›</span>
            </button>
            <div className="home-top-slider__dots" aria-label="Home page slide navigation">
              {homeSlides.map((slide, index) => (
                <button
                  key={slide}
                  type="button"
                  className={`home-top-slider__dot ${index === activeSlide ? 'home-top-slider__dot--active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === activeSlide ? 'true' : undefined}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="home-hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${heroBg})` }}>
        <div className="home-hero__glow home-hero__glow--left" aria-hidden="true" />
        <div className="home-hero__glow home-hero__glow--right" aria-hidden="true" />

        <div className="container home-hero__inner">
          <div className="home-hero__intro">
            <h1>Trusted by global leaders. Welcome to Madduri ADS</h1>
          </div>

          <div className="services-panel">
            <div className="services-panel__content">
              <div className="services-panel__heading">
                <span className="services-panel__kicker">Available Services</span>
              </div>

              <ul className="services-list">
                {services.map((service) => (
                  <li
                    key={service.label}
                    className={`services-list__item ${
                      featuredServiceLabels.has(service.label) ? 'services-list__item--featured' : ''
                    }`}
                    onClick={() => handleServiceClick(service)}
                    style={{ cursor: 'pointer' }}
                  >
                    <span className="services-list__icon" aria-hidden="true">
                      <ServiceIcon type={service.icon} />
                    </span>
                    <span className="services-list__label">{service.label}</span>
                  </li>
                ))}
              </ul>

              <div className="services-panel__publication-refs" aria-label="Featured publications">
                {featuredLogos.slice(0, 4).map((paper) => (
                  <span key={paper.name} className="mini-logo">
                    <img src={paper.img} alt={paper.name} />
                  </span>
                ))}
              </div>

              <button ref={ctaRef} className="btn btn-primary services-panel__cta" onClick={() => navigate('/submit-ad')}>
                Submit Your Ad Request
                <span className="btn-arrow" aria-hidden="true">→</span>
              </button>
            </div>

            <div className="services-panel__art" aria-hidden="true">
              <div className="services-panel__image-frame">
                <img src={heroNewspaperImage} alt="" className="services-panel__image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="popular-section">
        <div className="container popular-section__inner">
          <div className="section-header section-header--compact">
            <h2 className="section-title">Popular Newspapers</h2>
            <p className="section-subtitle">Choose from leading newspapers across Telangana &amp; AP</p>
          </div>

          <div className="newspapers-grid newspapers-grid--featured">
            {featuredLogos.map((paper) => (
              <div key={paper.name} className="newspaper-card" title={paper.name} onClick={scrollToCta} style={{ cursor: 'pointer' }}>
                <img src={paper.img} alt={paper.name} className="newspaper-logo-img" loading="lazy" />
              </div>
            ))}
          </div>

          <div className="newspapers-actions">
            <button
              type="button"
              className="btn btn-outline newspapers-toggle"
              onClick={() => setShowAllNewspapers((value) => !value)}
            >
              {showAllNewspapers ? 'See Less Newspapers' : 'See More Newspapers'}
            </button>
            <button className="btn btn-primary btn-large" onClick={() => navigate('/submit-ad')}>
              Submit Your Ad Request
              <span className="btn-arrow" aria-hidden="true">→</span>
            </button>
          </div>

          {showAllNewspapers && (
            <div className="all-newspapers-panel">
              <div className="all-newspapers-panel__header">
                <h3>All Newspapers</h3>
              </div>

              <div className="logo-strip-card logo-strip-card--dense">
                {newspaperCards.map((paper) => (
                  <span key={paper.name} className="logo-strip-item" title={paper.name} onClick={scrollToCta} style={{ cursor: 'pointer' }}>
                    <img src={paper.img} alt={paper.name} loading="lazy" />
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="home-info-section">
        <div className="container home-info-grid">
          <div className="home-info-copy">
            <span className="home-info-kicker">Why newspaper ads still work</span>
            <h2>Reach readers who still trust print for important decisions</h2>
            <p>
              Newspaper advertising is still one of the strongest ways to promote property listings,
              recruitment, public notices, business offers, and personal announcements because it
              reaches readers with high intent and long-form attention.
            </p>
            <p>
              Madduri ADS makes that process easier by helping you pick the correct category, the
              right newspaper, and the right edition for Telangana, Andhra Pradesh, and other major
              markets.
            </p>
          </div>

          <div className="home-info-cards">
            {valueCards.map((card) => (
              <article key={card.title} className="home-info-card">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="home-process-section"
        style={{
          backgroundImage: `linear-gradient(rgba(24, 49, 79, 0.95), rgba(24, 49, 79, 0.95)), url(${processBg})`,
        }}
      >
        <div className="container">
          <div className="section-header section-header--compact">
            <h2 className="section-title">How the booking process works</h2>
            <p className="section-subtitle">A quick overview of how we handle newspaper ad requests</p>
          </div>

          <div className="home-process-grid">
            {processSteps.map((item) => (
              <article key={item.step} className="home-process-card">
                <span className="home-process-card__step">{item.step}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="logo-strip-section">
        <div className="container">
          <div className="logo-strip-card">
            {stripLogos.map((paper) => (
              <span key={paper.name} className="logo-strip-item" title={paper.name}>
                <img src={paper.img} alt={paper.name} loading="lazy" />
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="final-banner-section">
        <div className="container">
          <div className="final-banner">
            <div>
              <h2>Post Your Ad</h2>
              <p>Ready to publish your ad in leading newspapers?</p>
            </div>
            <button className="btn btn-success btn-large" onClick={() => navigate('/submit-ad')}>
              Submit Your Ad Request
              <span className="btn-arrow" aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
