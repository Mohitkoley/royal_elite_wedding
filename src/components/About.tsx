import { motion, useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import leaf1 from '../images/leaf1.png';
import leaf2 from '../images/leaf2.png';
import FloralCorner from '../images/floral-corner.png';
import AboutImage from "../images/About.png";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="relative bg-cream py-16 md:py-24" ref={ref}>
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
              <img src={AboutImage} alt="Wedding Celebration" className="w-full h-full object-cover"/>
              {/* Decorative Overlays */}
              <motion.div
                className="absolute bottom-4 right-4 w-30 h-30 opacity-80"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 1 }}
              >
                <img src={FloralCorner} alt="" className="w-full h-full" />
              </motion.div>
              <motion.div
                className="absolute bottom-0 left-4 w-20 h-30 opacity-80"
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <img src={leaf1} alt="" className="w-full h-full" />
              </motion.div>
              <motion.div
                className="absolute top-0 right-4 w-20 h-30 opacity-80"
                initial={{ x: 50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <img src={leaf2} alt="" className="w-full h-full" />
              </motion.div>
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
