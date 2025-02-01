import React from 'react';
import { ChevronRight } from 'lucide-react';

const packages = [
  {
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3',
    title: 'Simple Wedding',
    subtitle: 'A Fairytale Wedding Awaits You!',
    description: 'Transform your dreams into reality with our bespoke wedding planning services. From enchanting venues to exquisite decor, we ensure every detail reflects your unique love story.'
  },
  {
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3',
    title: 'Floral Wedding',
    subtitle: 'Celebrate Your Love in Style!',
    description: 'Experience a stunning celebration with our comprehensive wedding solutions. We take care of everything, allowing you to focus on making unforgettable memories with your loved ones.'
  },
  {
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3',
    title: 'Luxury Wedding',
    subtitle: 'Your Perfect Day, Perfectly Planned!',
    description: 'Let us handle the details while you enjoy your special day. Our dedicated team brings creativity and expertise to ensure a seamless and magical wedding experience.'
  }
];

function Pricing() {
  return (
    <section className="bg-cream py-16 md:py-24 relative">
      {/* Decorative Pattern */}
      <div className="pattern-border w-full h-10 absolute top-0" />

      <div className="container mx-auto">
        <div className="text-center mb-16">
          <span className="uppercase text-gray-600 tracking-wider">
            To Know about Our Offers
          </span>
          <h2 className="text-4xl md:text-5xl font-playfair mt-4 mb-6">
            Pricing Plan
          </h2>
          <p className="text-xl md:text-2xl font-playfair text-gray-700">
            Wedding Packages With Flexible Prices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-xl overflow-hidden transform hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="h-52 overflow-hidden">
                <img
                  src={pkg.image}
                  alt={pkg.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-playfair text-gray-800 text-center mb-3">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 text-center mb-4">
                  {pkg.subtitle}
                </p>
                <p className="text-gray-700 text-center mb-6">
                  {pkg.description}
                </p>
                <button className="w-full btn btn-outline group">
                  Know More
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
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

export default Pricing;