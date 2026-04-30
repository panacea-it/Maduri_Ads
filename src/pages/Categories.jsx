import { useNavigate } from 'react-router-dom'
import matrimonialIcon from '../assets/categories-real/matrimonial-c70a59aaeb.png'
import propertySaleIcon from '../assets/categories-real/property-sale-04f6480087.png'
import propertyRentIcon from '../assets/categories-real/rental-430ed56e59.png'
import recruitmentIcon from '../assets/categories-real/jobs-c8931be55b.png'
import nameChangeIcon from '../assets/categories-real/name-change-582e2d84a9.png'
import businessIcon from '../assets/categories-real/business-1e50e7e1d6.png'
import servicesIcon from '../assets/categories-real/service-48cca58ee3.png'
import vehiclesIcon from '../assets/categories-real/vechiles-644f7169aa.png'
import healthFitnessIcon from '../assets/categories-real/health-04a683e521.png'
import remembranceIcon from '../assets/categories-real/obit-5c1c82816a.png'
import travelIcon from '../assets/categories-real/travel-d5b1e94b73.png'
import shoppingIcon from '../assets/categories-real/shopping-453456bd80.png'
import publicNoticeIcon from '../assets/categories-real/public-notice-6988d83a90.png'
import announcementIcon from '../assets/categories-real/announcement-e0e453cc00.png'
import astrologyIcon from '../assets/categories-real/astrology-339b40915b.png'
import entertainmentIcon from '../assets/categories-real/entertinment-6e4aae5c15.png'
import educationIcon from '../assets/categories-real/education-7852256f6d.png'
import computersIcon from '../assets/categories-real/computers-aec6094c3e.png'
import marriageBureauIcon from '../assets/categories-real/marrige-buearu-cc62909622.png'
import otherIcon from '../assets/categories-real/misceleneous-5ad22b9192.png'
import { useState } from 'react'
import './Categories.css'

const categories = [
  { name: 'Matrimonial', image: matrimonialIcon },
  { name: 'Property for Sale', image: propertySaleIcon },
  { name: 'Property for Rent', image: propertyRentIcon },
  { name: 'Recruitment', image: recruitmentIcon },
  { name: 'Name Change', image: nameChangeIcon },
  { name: 'Business', image: businessIcon },
  { name: 'Services', image: servicesIcon },
  { name: 'Vehicles', image: vehiclesIcon },
  { name: 'Health & Fitness', image: healthFitnessIcon },
  { name: 'Remembrance', image: remembranceIcon },
  { name: 'Travel', image: travelIcon },
  { name: 'Retail /Shopping', image: shoppingIcon },
  { name: 'Public Notice /Tenders', image: publicNoticeIcon },
  { name: 'Personal Announcement', image: announcementIcon },
  { name: 'Astrology', image: astrologyIcon },
  { name: 'Entertainment', image: entertainmentIcon },
  { name: 'Education', image: educationIcon },
  { name: 'Computers', image: computersIcon },
  { name: 'Marriage Bureau', image: marriageBureauIcon },
  { name: 'Other Categories', image: otherIcon },
]

const publications = [
  { name: 'The Times of India' },
  { name: 'Eenadu' },
  { name: 'Deccan Chronicle' },
  { name: 'Vijay Karnataka' },
  { name: 'Deccan Herald' },
  { name: 'The Hindu' },
  { name: 'Sakshi' },
  { name: 'Andhra Jyothy' },
  { name: 'Namaste Telangana' },
  { name: 'Hindi Milap' },
  { name: 'Nav Gujarat Samay' },
  { name: 'Financial Express' },
  { name: 'Nai Dunia' },
  { name: 'Munsif' },
  { name: 'Midday' },
  { name: 'Metro India' },
  { name: 'Loksatta' },
  { name: 'Lokmat' },
  { name: 'Jansatta' },
  { name: 'Inext' },
  { name: 'Indian Express' },
  { name: 'Hindustan Hindi' },
  { name: 'Himali Bela' },
  { name: 'Gujarat Samachar' },
  { name: 'Free Press Journal' },
  { name: 'Greater Kashmir' },
  { name: 'The Navhind Times' },
  { name: 'Sambad' },
  { name: 'Nagpur Times' },
  { name: 'Daily Thanti' },
  { name: 'Telangana Today' },
  { name: 'Sikkim Express' },
  { name: 'Siasat' },
  { name: 'Sanmarg' },
  { name: 'Sandesh' },
  { name: 'Sandhya Times' },
  { name: 'Navbharat Times' },
  { name: 'Samaja' },
  { name: 'Sakal' },
  { name: 'Punjab Kesari' },
  { name: 'Pudhari' },
  { name: 'Prabhat Khabar' },
  { name: 'O Herald O' },
  { name: 'Navshakti' },
  { name: 'Udayavani' },
  { name: 'Tribune' },
  { name: 'Maharashtra Times' },
  { name: 'Rajasthan Patrika' },
  { name: 'Dinakaran' },
  { name: 'Mirror' },
  { name: 'Malayala Manorama' },
  { name: 'Mathrubhumi' },
  { name: 'Kannada Prabha' },
  { name: 'Ei Samay' },
  { name: 'Economic Times' },
  { name: 'Prajavani' },
  { name: 'New Indian Express' },
  { name: 'Business line' },
  { name: 'Madhyamam' },
  { name: 'Dinamalar' },
  { name: 'Times of India-Property Tabloid' },
  { name: 'The Hindu Tamil' },
  { name: 'Dainik Agradoot' },
  { name: 'Echo of Arunachal' },
  { name: 'Dainik Janambhumi' },
  { name: 'Divya Marathi' },
  { name: 'Divya Himachal' },
  { name: 'Divya Bhaskar' },
  { name: 'Dharitri' },
  { name: 'Dainik Jagran' },
  { name: 'Dainik Bhaskar' },
  { name: 'Etemaad' },
  { name: 'Bombay Samachar' },
  { name: 'Amcho Avaz' },
  { name: 'Assam Tribune' },
  { name: 'Anandabazar Patrika' },
  { name: 'Amar Ujala' },
  { name: 'Ajit' },
  { name: 'Hindustan Times' },
]

const categoryHighlights = [
  {
    title: 'Pick the right category',
    text: 'Matrimonial, property, recruitment, notice, business, and service ads all need different wording and placement choices.',
  },
  {
    title: 'Match the newspaper to the goal',
    text: 'Local editions work well for location-specific requirements, while larger papers help with wider reach and brand recall.',
  },
  {
    title: 'Prepare the ad draft clearly',
    text: 'A short and direct message is often easier to publish quickly and can improve the clarity of your newspaper booking.',
  },
]

export default function Categories() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    category: '',
    location: '',
    name: '',
    mobile: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="categories-page">
      <section className="categories-hero">
        <div className="container categories-hero__inner">
          <div className="categories-hero__copy">
            <span className="categories-hero__kicker">Categories</span>
            <h1>Make Your Ad Unforgettable</h1>
            <p>
              Fill in the details below and we'll share the right newspaper options for your ad.
            </p>
          </div>

          {!submitted ? (
            <form className="categories-hero__form" onSubmit={handleSubmit}>
              <div className="categories-hero__field">
                <label htmlFor="category">Category</label>
                <select id="category" name="category" value={form.category} onChange={handleChange} required>
                  <option value="" disabled>
                    Select category
                  </option>
                  {categories.map((category) => (
                    <option key={category.name} value={category.name}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="categories-hero__field">
                <label htmlFor="location">Location</label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="Enter location"
                  value={form.location}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="categories-hero__field">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="categories-hero__field">
                <label htmlFor="mobile">Mobile number</label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="Enter number"
                  value={form.mobile}
                  onChange={handleChange}
                  required
                />
              </div>

              <button type="submit" className="btn btn-primary categories-hero__cta">
                Get a call
              </button>
            </form>
          ) : (
            <div className="success-popup" role="status" aria-live="polite">
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
                    `New category inquiry from Madduri ADS website\nCategory: ${form.category || '-'}\nLocation: ${form.location || '-'}\nName: ${form.name || '-'}\nMobile Number: ${form.mobile || '-'}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
                <button
                  type="button"
                  className="success-popup__button success-popup__button--orange"
                  onClick={() => setSubmitted(false)}
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="categories-section categories-section--tight">
        <div className="container">
          <div className="categories-layout">
            <div className="categories-main">
              <div className="section-title text-left">
                <h4 className="text-uppercase">Please choose your Category</h4>
                <hr />
              </div>

              <div className="row-fluid service-list">
                <div className="text-widget">
                  <ul className="clearfix categories-grid">
                    {categories.map(cat => (
                      <li key={cat.name} className="category-item">
                        <button
                          type="button"
                          className="category-link"
                          onClick={() => navigate('/submit-ad')}
                          aria-label={cat.name}
                        >
                          <span className="category-image">
                            <img src={cat.image} alt={cat.name} loading="lazy" />
                          </span>
                          <h4>{cat.name}</h4>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <aside className="categories-sidebar sidebar col-md-3 col-sm-12">
              <div className="widget pulication-list clearfix">
                <div className="section-title text-left">
                  <h5>Trusted Publications</h5>
                  <hr />
                </div>

                <div className="publications-marquee" aria-label="Trusted publications scrolling list">
                  <div className="publications-track">
                    <ul className="check publications-list publications-list--rolling">
                      {publications.map((publication) => (
                        <li key={publication.name}>
                          <span className="publication-name" title={publication.name}>
                            {publication.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <ul className="check publications-list publications-list--rolling publications-list--clone" aria-hidden="true">
                      {publications.map((publication) => (
                        <li key={`${publication.name}-clone`}>
                          <span className="publication-name" title={publication.name}>
                            {publication.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="categories-section categories-section--tight categories-section--bottom">
        <div className="container">
          <div className="categories-intro-card">
            <span className="categories-intro-card__kicker">Category guidance</span>
            <h2>Choose the category that best matches your advertising need</h2>
            <p>
              Booked newspaper ads work best when the category, newspaper, and edition match the
              purpose of the message. For property and recruitment, response depends on location.
              For notices and announcements, clarity and publication timing matter most.
            </p>
            <div className="categories-intro-grid">
              {categoryHighlights.map((item) => (
                <article key={item.title} className="categories-intro-item">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
