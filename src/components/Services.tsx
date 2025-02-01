import React from 'react';
import { ChevronRight } from 'lucide-react';

const services = [
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3',
    title: 'Complete Wedding Planning',
    description: 'End-to-end wedding planning services tailored to your vision.'
  },
  {
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3',
    title: 'Decor & Design',
    description: 'Stunning decorations that bring your wedding theme to life.'
  },
  {
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3',
    title: 'Vendor Management',
    description: 'Coordination with the best vendors in the industry.'
  }
];

function Services() {
  return (
    <section className="bg-primary-dark text-white py-16 md:py-24 relative">
      {/* Decorative Pattern */}
      <div className="pattern-border w-full h-10 absolute top-0" />

      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-playfair mb-4">Why Choose Us</h2>
        
        <div className="flex flex-col lg:flex-row gap-8 items-start mb-12">
          <div className="lg:w-1/2">
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-playfair leading-tight uppercase mb-6">
              Unforgettable Wedding,
              <br />
              Designed with love
            </h3>
          </div>
          
          <div className="lg:w-1/2">
            <p className="text-lg mb-6">
              Choose us as your trusted partner to create magical, memorable moments 
              that will leave a lasting impression on you and your guests.
            </p>
            <button className="btn bg-primary hover:bg-primary-light text-white group">
              See More
              <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="relative overflow-hidden rounded-lg group"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-6">
                <h3 className="text-2xl font-playfair mb-2">{service.title}</h3>
                <p className="text-white/80">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Decorative Pattern */}
      <div className="pattern-border w-full h-10 absolute bottom-0 transform rotate-180" />
    </section>
  );
}

export default Services;