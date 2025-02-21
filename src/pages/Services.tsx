import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

interface Service {
  id: number;
  title: string;
  description: string;
  features: string[];
  image: string;
  category: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Wedding Planning & Coordination",
    description: "From intimate gatherings to grand celebrations, we offer comprehensive wedding planning services tailored to your vision.",
    features: [
      "Full-service wedding planning",
      "Day-of coordination",
      "Vendor selection and management",
      "Timeline creation and management",
      "Budget planning and tracking",
      "Guest list management"
    ],
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    category: "Wedding Services"
  },
  {
    id: 2,
    title: "Corporate Events",
    description: "Create memorable corporate events that align with your company's values and objectives.",
    features: [
      "Conference planning",
      "Team building events",
      "Product launches",
      "Award ceremonies",
      "Holiday parties",
      "Corporate retreats"
    ],
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
    category: "Corporate Events"
  },
  {
    id: 3,
    title: "Social Celebrations",
    description: "Make your special moments unforgettable with our expertly planned social events.",
    features: [
      "Birthday parties",
      "Anniversary celebrations",
      "Engagement parties",
      "Baby showers",
      "Graduation parties",
      "Holiday celebrations"
    ],
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
    category: "Social Events"
  },
  {
    id: 4,
    title: "Decor & Design",
    description: "Transform your venue into a stunning space that reflects your style and theme.",
    features: [
      "Custom floral arrangements",
      "Lighting design",
      "Table settings",
      "Theme development",
      "Props and furniture rental",
      "Stage and backdrop design"
    ],
    image: "https://images.unsplash.com/photo-1478146896981-b80fe463b330",
    category: "Design Services"
  }
];

const ServicesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="font-playfair text-4xl md:text-5xl text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Crafting unforgettable experiences with attention to every detail
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm">
                  {service.category}
                </div>
              </div>
              <div className="p-6">
                <h2 className="font-playfair text-2xl text-gray-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <span className="w-2 h-2 bg-primary/60 rounded-full mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full bg-primary-dark text-white py-3 px-6 rounded-md hover:bg-primary-darker transition-colors duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ServicesPage; 
