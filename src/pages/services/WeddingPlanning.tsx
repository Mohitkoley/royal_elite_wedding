import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer';

const WeddingPlanning: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="mb-12">
            <h1 className="font-playfair text-4xl md:text-5xl text-gray-900 mb-6 text-center">
              Wedding Planning & Coordination
            </h1>
            <img
              src="https://images.unsplash.com/photo-1519225421980-715cb0215aed"
              alt="Wedding Planning"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
            />
            <p className="text-gray-600 text-lg mb-8">
              From intimate gatherings to grand celebrations, we offer comprehensive wedding planning services tailored to your vision. Our experienced team will guide you through every step of the planning process, ensuring your special day is everything you've dreamed of and more.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="font-playfair text-2xl text-gray-900 mb-4">Our Services Include</h2>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary/60 rounded-full mr-2" />
                    Full-service wedding planning
                  </li>
                  {/* Add more service items */}
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="font-playfair text-2xl text-gray-900 mb-4">Why Choose Us</h2>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-700">
                    <span className="w-2 h-2 bg-primary/60 rounded-full mr-2" />
                    Experienced event planners
                  </li>
                  {/* Add more benefits */}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default WeddingPlanning; 
