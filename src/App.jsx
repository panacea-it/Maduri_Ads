import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import CallFloat from './components/CallFloat'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Categories from './pages/Categories'
import Contact from './pages/Contact'
import SubmitAd from './pages/SubmitAd'
import TermsConditions from './pages/TermsConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/submit-ad" element={<SubmitAd />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </main>
      <Footer />
      <CallFloat phone="917386162084" />
      <WhatsAppFloat phone="917386162084" />
    </BrowserRouter>
  )
}
