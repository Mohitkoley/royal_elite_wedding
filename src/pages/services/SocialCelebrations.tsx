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
    title: "Birthday Celebrations",
    description: "Create unforgettable birthday experiences for all ages and styles.",
    items: [
      "Milestone birthday parties",
      "Theme-based celebrations",
      "Custom cake and dessert displays",
      "Entertainment coordination",
      "Personalized decorations"
    ]
  },
  {
    title: "Anniversary Events",
    description: "Celebrate years of love and commitment with elegantly planned anniversary parties.",
    items: [
      "Intimate dinner parties",
      "Vow renewal ceremonies",
      "Photo retrospective displays",
      "Custom anniversary themes",
      "Family reunion coordination"
    ]
  },
  {
    title: "Baby & Bridal Showers",
    description: "Plan beautiful celebrations to welcome new beginnings.",
    items: [
      "Custom shower themes",
      "Interactive guest activities",
      "Gift registry management",
      "Catering arrangements",
      "Photography services"
    ]
  },
  {
    title: "Graduation Parties",
    description: "Celebrate academic achievements with style and excitement.",
    items: [
      "Indoor/outdoor venue setup",
      "School colors incorporation",
      "Memory wall creation",
      "Catering for large groups",
      "Entertainment booking"
    ]
  }
];

const SocialCelebrations: React.FC = () => {
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
            Social Celebrations
          </h1>
          <img
            src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3"
            alt="Social Celebrations"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
          />
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              Make every milestone moment truly special with our expertly planned social celebrations. From intimate gatherings to grand parties, we create memorable experiences that bring people together and celebrate life's precious moments.
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
              Ready to Plan Your Celebration?
            </h2>
            <p className="text-gray-600 mb-6">
              Let's create unforgettable memories together. Contact us to start planning your special event.
            </p>
            <button className="bg-primary-dark text-white px-8 py-3 rounded-md hover:bg-primary-darker transition-colors duration-300">
              Start Planning
            </button>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default SocialCelebrations; 
