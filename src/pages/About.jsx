import './About.css'
import aboutMockup from '../assets/Images/about.png'

const aboutPoints = [
  {
    title: 'Hands-on booking support',
    text: 'We help clients choose the right newspaper, category, and edition based on the kind of advertisement they need.',
  },
  {
    title: 'Strong category knowledge ',
    text: 'From property and  recruitment to notices, matrimonial, and personal announcements, we guide the booking flow end to end.',
  },
  {
    title: 'Fast, clear communication',
    text: 'Our process is built to reduce confusion, save time, and make the ad release journey smoother for every client.',
  },
]

const aboutSteps = [
  'Understand the requirement and target city',
  'Recommend the best publication and ad format',
  'Prepare the message and move the booking forward',
]

export default function About() {
  return (
    <div className="about-page">
      <section className="about-image-section">
        <img className="about-image" src={aboutMockup} alt="About Madduri ADS" />
      </section>

      <section className="about-content-section">
        <div className="container about-content-grid">
          <article className="about-content-card about-content-card--intro">
            <span className="about-kicker">About Madduri ADS</span>
            <h2>Your trusted newspaper ad booking partner</h2>
            <p>
              Madduri ADS helps individuals, businesses, and agencies publish newspaper ads with
              clarity, speed, and the right publication guidance. We focus on making the process
              simple while keeping the ad format aligned with the advertiser's goal.
            </p>
            <p>
              Our team supports newspaper ad requests for property, recruitment, notices,
              matrimonial, business, and other common categories across Telangana and Andhra
              Pradesh.
            </p>
          </article>

          <article className="about-content-card">
            <h2>How we help</h2>
            <div className="about-content-list">
              {aboutPoints.map((point) => (
                <div key={point.title} className="about-content-item">
                  <h3>{point.title}</h3>
                  <p>{point.text}</p>
                </div>
              ))}
            </div>
          </article>

          <aside className="about-process-card">
            <h2>What clients usually need</h2>
            <ul>
              {aboutSteps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </div>
  )
}
