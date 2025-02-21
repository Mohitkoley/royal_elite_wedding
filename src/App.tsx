import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import './loader.css';
import Header from './components/Header';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import TestimonialsPage from './pages/Testimonials';
import ServicesPage from './pages/Services';
import WeddingPlanning from './pages/services/WeddingPlanning';
import CorporateEvents from './pages/services/CorporateEvents';
import SocialCelebrations from './pages/services/SocialCelebrations';
import DecorDesign from './pages/services/DecorDesign';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Simulate a 2-second loading time

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-[#f7e7ce] flex items-center justify-center">
        <div className="loader"></div>
      </div>
    );
  }

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
      </Routes>
    </Router>
  );
}

export default App;
