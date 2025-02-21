import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const WeddingTrends: React.FC = () => {
  const trends = [
    {
      title: "Sustainable Weddings",
      content: "More couples are opting for eco-friendly choices, incorporating sustainable practices like locally sourced flowers, recyclable invitations, and organic catering. This trend not only benefits the environment but also adds a meaningful touch to your celebration."
    },
    {
      title: "Intimate Celebrations",
      content: "With a focus on quality over quantity, many couples are choosing to host smaller, more intimate weddings. This allows for a more personalized experience with close family and friends, creating cherished memories that last a lifetime."
    },
    {
      title: "Bold Color Palettes",
      content: "Say goodbye to traditional whites and pastels! This year, bold and vibrant colors are making a statement. Couples are embracing rich jewel tones or contrasting color schemes to reflect their personality and style."
    },
    {
      title: "Unique Entertainment Options",
      content: "To keep guests engaged, couples are incorporating unconventional entertainment, such as live painters, aerial performers, or interactive food stations. These unique experiences add a fun and memorable twist to any wedding."
    },
    {
      title: "Technology Integration",
      content: "From live-streaming ceremonies for distant guests to using drones for aerial photography, technology is becoming an essential part of weddings. Couples are finding innovative ways to connect with their loved ones, no matter where they are."
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      <div className="container mx-auto px-4 py-20">
        <motion.article
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-8"
          >
            <img
              src="/images/blog/wedding-trends.jpg"
              alt="Wedding Trends 2024"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
            />
            <h1 className="font-playfair text-4xl md:text-5xl text-gray-900 mb-4">
              Top 5 Wedding Trends of 2024
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              <span className="text-primary-dark">March 5, 2024</span>
              <span className="mx-2">•</span>
              <span>Wedding Trends</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-gray-700 mb-8">
              As wedding trends evolve, couples are continually seeking fresh ideas to make their special day unique and memorable. Here are the top five trends we're seeing this year:
            </p>

            <div className="space-y-8">
              {trends.map((trend, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary"
                >
                  <h2 className="font-playfair text-2xl text-gray-900 mb-4">
                    {index + 1}. {trend.title}
                  </h2>
                  <p className="text-gray-700">
                    {trend.content}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="text-gray-700 mt-8 text-center font-medium"
            >
              By incorporating these trends into your wedding planning, you can create an unforgettable celebration that reflects your style and values.
            </motion.p>
          </motion.div>
        </motion.article>
      </div>
      <Footer />
    </div>
  );
};

export default WeddingTrends; 
