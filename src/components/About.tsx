import { ChevronRight } from 'lucide-react';

function About() {
  return (
    <section className="relative bg-cream py-16 md:py-24">
      {/* Decorative Pattern */}
      <div className="pattern-border w-full h-10 absolute top-0" />
      
      {/* Decorative Mandala */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 w-24 h-24 opacity-20">
        <img src="/mandala-pattern.png" alt="" className="w-full h-full" />
      </div>

      <div className="container mx-auto">
        <div className="bg-white/90 rounded-lg shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section */}
            <div className="lg:w-1/2 h-[400px] lg:h-auto relative overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3" 
                alt="Wedding Celebration" 
                className="w-full h-full object-cover"
              />
              {/* Decorative Overlays */}
              <div className="absolute bottom-4 right-4 w-24 h-24 opacity-80">
                <img src="/floral-corner.png" alt="" className="w-full h-full" />
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-center lg:text-left font-inter text-base uppercase tracking-[3px] text-gray-600 mb-4">
                About Us
              </span>
              
              <h2 className="font-playfair text-3xl lg:text-4xl text-center lg:text-left text-gray-900 mb-6">
                Designing Your Perfect Wedding Day
              </h2>

              <div className="w-24 h-1 bg-primary mx-auto lg:mx-0 mb-6" />

              <p className="font-playfair text-base lg:text-lg text-gray-700 text-center lg:text-left mb-8">
                At Royal Elite Wedding, we specialize in creating unforgettable celebrations, 
                turning your dreams into reality. Whether you're planning an extravagant wedding 
                or a sophisticated corporate event, our dedicated team ensures that every detail 
                is flawlessly executed.
              </p>

              <button className="btn btn-primary group self-center lg:self-start">
                Get Started
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Pattern */}
      <div className="pattern-border w-full h-10 absolute bottom-0 transform rotate-180" />
    </section>
  );
}

export default About;
