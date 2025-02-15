import { motion, useInView } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { useRef } from 'react';
import leaf1 from '../images/leaf1.png';
import leaf2 from '../images/leaf2.png';
import FloralCorner from '../images/floral-corner.png';
import AboutImage from "../images/About.png";
import aboutbottom from "../images/about-bottom.png";
import Swastik from './Swastik';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative bg-cream py-16 md:py-24">
      {/* Decorative Pattern */}
      <div className="pattern-border w-full h-10 absolute top-0" />
      
      {/* Add Swastik animations */}
      <Swastik className="top-12 left-12" />
      <Swastik className="bottom-12 right-12" size={50} />
      
      {/* Decorative Mandala with hover effect */}
      <motion.div 
        className="absolute top-24 left-1/2 -translate-x-1/2 w-24 h-24 opacity-20"
        whileHover={{ 
          scale: 1.1, 
          opacity: 0.3,
          rotate: 180,
          transition: { duration: 0.3 }
        }}
      >
        <img src="/mandala-pattern.png" alt="" className="w-full h-full" />
      </motion.div>

      <div className="container mx-auto">
        <div className="bg-white/90 rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
          <div className="flex flex-col lg:flex-row">
            {/* Image Section with hover effect */}
            <div className="lg:w-1/2 h-[400px] lg:h-auto relative overflow-hidden group">
              <motion.img 
                src={AboutImage} 
                alt="Wedding Celebration" 
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              {/* Decorative Overlays with hover effects */}
              <motion.div
                className="absolute bottom-4 right-4 w-30 h-30 opacity-80"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 10,
                  transition: { duration: 0.3 }
                }}
                transition={{ duration: 1 }}
              >
                <img src={FloralCorner} alt="" className="w-full h-full" />
              </motion.div>
              <motion.div
                className="absolute bottom-0 left-4 w-20 h-30 opacity-80"
                initial={{ x: -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                whileHover={{ 
                  scale: 1.1,
                  x: 5,
                  transition: { duration: 0.3 }
                }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <img src={leaf1} alt="" className="w-full h-full" />
              </motion.div>
              <motion.div
                className="absolute top-0 right-4 w-20 h-30 opacity-80"
                initial={{ x: 50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : {}}
                whileHover={{ 
                  scale: 1.1,
                  x: -5,
                  transition: { duration: 0.3 }
                }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <img src={leaf2} alt="" className="w-full h-full" />
              </motion.div>
            </div>

            {/* Content Section */}
            <motion.div 
              className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.span 
                className="text-center font-inter text-base uppercase tracking-[3px] text-gray-600 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                whileHover={{ letterSpacing: "4px" }}
                transition={{ delay: 0.2 }}
              >
                About Us
              </motion.span>
              
              <motion.h2 
                className="font-playfair text-3xl lg:text-4xl text-center text-gray-900 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                whileHover={{ scale: 1.02 }}
                transition={{ delay: 0.4 }}
              >
                Designing Your Perfect <br /> Wedding Day
              </motion.h2>

              <motion.div 
                className="w-24 mx-auto mt-2"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: isInView ? 1 : 0 }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 }
                }}
                transition={{ delay: 0.6 }}
              >
                <img src={aboutbottom} alt="" className='w-30 mx-auto' />
              </motion.div>

              <motion.p 
                className="font-playfair text-base lg:text-lg text-gray-700 text-center mt-8 mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                whileHover={{ scale: 1.01 }}
                transition={{ delay: 0.8 }}
              >
                At Royal Elite Wedding, we specialize in creating unforgettable celebrations, 
                turning your dreams into reality. Whether you're planning an extravagant wedding 
                or a sophisticated corporate event, our dedicated team ensures that every detail 
                is flawlessly executed.
              </motion.p>

              <motion.button 
                className="btn btn-primary rounded-md group self-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: isInView ? 1 : 0 }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ delay: 1 }}
              >
                Get Started
                <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </motion.div> 
          </div>
        </div>
      </div>

      {/* Bottom Decorative Pattern */}
      <div className="pattern-border w-full h-10 absolute bottom-0 transform rotate-180" />
    </section>
  );
}

export default About;
