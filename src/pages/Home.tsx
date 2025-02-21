import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Services from '../components/Services';
import Pricing from '../components/Pricing';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Testimonials from '../components/Testimonials';
import Enquiry from '../components/Enquiry';
import NewsletterSubscribe from '../components/NewsletterSubscribe';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  return (
    <>
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="enquiry"><Enquiry /></section>
      <section id="gallery"><Gallery /></section>
      <section id="services"><Services /></section>
      <section id="pricing"><Pricing /></section>
      <section id="testimonials" className="scroll-mt-20"><Testimonials /></section>
      <section id="faq"><FAQ /></section>
      <section id="contact"><Contact /></section>
      <section id="newsletter"><NewsletterSubscribe /></section>
      <Footer />
    </>
  );
};

export default Home; 
