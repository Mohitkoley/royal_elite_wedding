import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../../components/Footer';

interface ServiceFeature {
  title: string;
  description: string;
  items: string[];
}

const features: ServiceFeature[] = [
  {
    title: "Conferences & Seminars",
    description: "Organize professional conferences that inspire and connect your audience.",
    items: [
      "Venue selection and setup",
      "Speaker coordination",
      "Audio-visual equipment",
      "Registration management",
      "Breakout session planning"
    ]
  },
  {
    title: "Team Building Events",
    description: "Create engaging experiences that strengthen team bonds and company culture.",
    items: [
      "Interactive workshops",
      "Outdoor activities",
      "Team challenges",
      "Wellness programs",
      "Cultural experiences"
    ]
  },
  {
    title: "Product Launches",
    description: "Showcase your products with impactful and memorable launch events.",
    items: [
      "Brand-aligned design",
      "Media coordination",
      "Live demonstrations",
      "Press kit preparation",
      "Social media integration"
    ]
  },
  {
    title: "Corporate Galas",
    description: "Celebrate company milestones and achievements with elegant corporate galas.",
    items: [
      "Award ceremonies",
      "Entertainment booking",
      "Gourmet catering",
      "Decor and lighting",
      "VIP guest management"
    ]
  }
];

const CorporateEvents: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="font-playfair text-4xl md:text-5xl text-gray-900 mb-6 text-center">
            Corporate Events
          </h1>
          <img
            src="https://images.unsplash.com/photo-1511578314322-379afb476865"
            alt="Corporate Events"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
          />
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              Elevate your corporate events with our professional planning and execution services. From conferences to team building activities, we ensure every event aligns with your company's objectives and leaves a lasting impression.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <h3 className="font-playfair text-2xl text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <span className="w-2 h-2 bg-primary/60 rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-lg shadow-md p-8 text-center"
          >
            <h2 className="font-playfair text-3xl text-gray-900 mb-4">
              Ready to Plan Your Corporate Event?
            </h2>
            <p className="text-gray-600 mb-6">
              Let's create a professional and impactful event that meets your business objectives.
            </p>
            <button className="bg-primary-dark text-white px-8 py-3 rounded-md hover:bg-primary-darker transition-colors duration-300">
              Get Started
            </button>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default CorporateEvents; 
