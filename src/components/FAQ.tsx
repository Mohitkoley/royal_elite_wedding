import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'What services does Royal Elite Events offer?',
    answer: 'We provide a comprehensive range of event planning services, including Mandaps, Stage Backdrop, Florist services, Dancefloor Wraps, Sparklers, Fruit & Ice Cravings, Lighting, Tent & Party Rentals, backdrop designs, and Photobooths. Our goal is to offer everything you need to make your event unforgettable.'
  },
  {
    question: 'How can I book your services?',
    answer: 'You can book our services by contacting us through phone, email, or filling out the contact form on our website. We\'ll schedule a consultation to discuss your requirements and create a customized plan.'
  },
  {
    question: 'How far in advance should I book your services?',
    answer: 'We recommend booking at least 6-12 months in advance for weddings and 3-6 months for other events to ensure availability and allow adequate planning time.'
  },
  {
    question: 'Do you offer event planning consultations?',
    answer: 'Yes, we offer complimentary initial consultations to discuss your vision, requirements, and how we can help make your event spectacular.'
  },
  {
    question: 'Do you handle corporate events as well?',
    answer: 'Yes, we provide planning and coordination services for corporate events, including conferences, galas, and team-building activities.'
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-primary-dark text-white py-16 md:py-24 relative">
      {/* Decorative Pattern */}
      <div className="pattern-border w-full h-10 absolute top-0" />

      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-playfair text-center mb-12">
          Some Frequently Asked Questions from Our Clients
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between bg-white text-gray-900 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <span className="font-medium text-left">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-primary" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-primary" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="bg-white/10 text-white p-4 rounded-b-lg mt-1">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Decorative Pattern */}
      <div className="pattern-border w-full h-10 absolute bottom-0 transform rotate-180" />
    </section>
  );
}

export default FAQ;