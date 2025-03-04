import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './pages/Home';
import WhatsAppButton from './components/WhatsAppButton';
import ContactPage from './pages/ContactPage';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import TestimonialsPage from './pages/Testimonials';
import ServicesPage from './pages/Services';
import WeddingPlanning from './pages/services/WeddingPlanning';
import CorporateEvents from './pages/services/CorporateEvents';
import SocialCelebrations from './pages/services/SocialCelebrations';
import DecorDesign from './pages/services/DecorDesign';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/wedding-planning" element={<WeddingPlanning />} />
        <Route path="/services/corporate-events" element={<CorporateEvents />} />
        <Route path="/services/social-celebrations" element={<SocialCelebrations />} />
        <Route path="/services/decor-design" element={<DecorDesign />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}

export default App;
