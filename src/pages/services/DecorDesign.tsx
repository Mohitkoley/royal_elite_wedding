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
    title: "Custom Floral Design",
    description: "Create stunning floral arrangements that perfectly match your event's theme and style.",
    items: [
      "Personalized bouquets and centerpieces",
      "Archway and altar decorations",
      "Seasonal flower selections",
      "Sustainable and eco-friendly options",
      "Premium flower varieties"
    ]
  },
  {
    title: "Lighting Solutions",
    description: "Transform any space with our professional lighting design services.",
    items: [
      "Ambient and mood lighting",
      "LED and string light installations",
      "Spotlight and accent lighting",
      "Dance floor lighting",
      "Outdoor lighting solutions"
    ]
  },
  {
    title: "Theme Development",
    description: "Develop cohesive and stunning event themes that tell your story.",
    items: [
      "Color scheme coordination",
      "Style consultation",
      "Theme concept development",
      "Visual presentation",
      "Brand integration for corporate events"
    ]
  },
  {
    title: "Furniture & Props",
    description: "Access our extensive collection of furniture and decorative elements.",
    items: [
      "Luxury seating arrangements",
      "Custom-built installations",
      "Vintage and modern props",
      "Photo booth setups",
      "Themed decorative elements"
    ]
  }
];

const DecorDesign: React.FC = () => {
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
            Decor & Design
          </h1>
          <img
            src="https://images.unsplash.com/photo-1478146896981-b80fe463b330"
            alt="Decor & Design"
            className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
          />
          
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-gray-600 text-lg leading-relaxed">
              Transform your venue into a stunning masterpiece that reflects your vision and style. Our expert design team combines creativity with precision to create breathtaking environments that leave lasting impressions.
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
              Ready to Transform Your Event?
            </h2>
            <p className="text-gray-600 mb-6">
              Let's create something extraordinary together. Contact us to discuss your vision.
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

export default DecorDesign; 
