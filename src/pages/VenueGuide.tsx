import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

const VenueGuide: React.FC = () => {
  const guidePoints = [
    {
      title: "Determine Your Budget",
      content: "Before you start looking at venues, establish a budget. This will help narrow down your options and prevent overspending. Remember to account for additional costs like catering, decor, and rentals."
    },
    {
      title: "Guest List Considerations",
      content: "Your venue must comfortably accommodate your guest list. Create a preliminary list and choose a venue that fits, considering both capacity and layout to facilitate guest movement."
    },
    {
      title: "Ambiance and Style",
      content: "Consider the theme and style of your wedding. Whether you envision a rustic barn, elegant ballroom, or a serene beach, ensure the venue aligns with your vision. Visit the venue during different times of the day to see how the lighting affects the space."
    },
    {
      title: "Location",
      content: "Choose a venue that is convenient for your guests. Consider travel times, parking availability, and accommodation options nearby. A central location can make it easier for guests to attend."
    },
    {
      title: "Availability and Flexibility",
      content: "Popular venues often book up quickly, so check availability early on. Additionally, discuss any flexibility regarding dates or packages that might suit your needs better."
    },
    {
      title: "Services and Amenities",
      content: "Check what services the venue offers, including catering, lighting, and sound systems. Some venues may include packages that simplify your planning process, making it easier to stay organized."
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
              src="/images/blog/venue-guide.jpg"
              alt="Wedding Venue Guide"
              className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
            />
            <h1 className="font-playfair text-4xl md:text-5xl text-gray-900 mb-4">
              A Complete Guide to Choosing the Perfect Venue
            </h1>
            <div className="flex items-center text-gray-600 mb-8">
              <span className="text-primary-dark">March 10, 2024</span>
              <span className="mx-2">•</span>
              <span>Venue Selection</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-gray-700 mb-8">
              Selecting the right venue is one of the most important decisions in your wedding planning process. Here's a comprehensive guide to help you find the perfect location:
            </p>

            <div className="space-y-8">
              {guidePoints.map((point, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary"
                >
                  <h2 className="font-playfair text-2xl text-gray-900 mb-4">
                    {index + 1}. {point.title}
                  </h2>
                  <p className="text-gray-700">
                    {point.content}
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
              By following this guide, you can confidently choose a venue that suits your style and needs, ensuring your special day is everything you've dreamed of.
            </motion.p>
          </motion.div>
        </motion.article>
      </div>
      <Footer />
    </div>
  );
};

export default VenueGuide; 
