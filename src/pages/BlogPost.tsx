import React from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer';
import VenueGuide from './VenueGuide';
import WeddingTrends from './WeddingTrends';

interface TimelineItem {
  timeframe: string;
  tasks: string[];
}

const weddingChecklist: TimelineItem[] = [
  {
    timeframe: "12-18 Months Before",
    tasks: [
      "Set a budget",
      "Create a guest list",
      "Choose a wedding date",
      "Book a venue",
      "Research vendors (photographer, caterer, florist)"
    ]
  },
  {
    timeframe: "8-12 Months Before",
    tasks: [
      "Hire a wedding planner (if desired)",
      "Select your wedding party",
      "Choose your theme and color palette",
      "Shop for bridal attire and schedule fittings",
      "Book vendors (DJ, florist, officiant)"
    ]
  },
  {
    timeframe: "6-8 Months Before",
    tasks: [
      "Send save-the-dates",
      "Finalize the guest list",
      "Arrange accommodations for guests",
      "Create a wedding website"
    ]
  },
  {
    timeframe: "3-6 Months Before",
    tasks: [
      "Order invitations",
      "Plan the ceremony details",
      "Schedule hair and makeup trials",
      "Book transportation for the wedding day"
    ]
  },
  {
    timeframe: "1-3 Months Before",
    tasks: [
      "Mail invitations",
      "Finalize the seating chart",
      "Confirm details with vendors",
      "Schedule final dress fitting"
    ]
  },
  {
    timeframe: "2 Weeks Before",
    tasks: [
      "Confirm RSVP list",
      "Finalize timeline for the wedding day",
      "Create a list of must-have photos with your photographer"
    ]
  },
  {
    timeframe: "Day Before",
    tasks: [
      "Rehearse the ceremony",
      "Ensure all vendor payments are prepared",
      "Pack an emergency kit (sewing kit, snacks, etc.)"
    ]
  }
];

const BlogPost: React.FC = () => {
  const { slug } = useParams();

  // Render different components based on the slug
  switch(slug) {
    case 'venue-guide':
      return <VenueGuide />;
    case 'wedding-trends':
      return <WeddingTrends />;
    case 'wedding-checklist':
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
                  src="https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6"
                  alt="Wedding Planning Checklist"
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg mb-8"
                />
                <h1 className="font-playfair text-4xl md:text-5xl text-gray-900 mb-4">
                  Essential Checklist for Planning Your Dream Wedding
                </h1>
                <div className="flex items-center text-gray-600 mb-8">
                  <span className="text-primary-dark">March 15, 2024</span>
                  <span className="mx-2">•</span>
                  <span>Wedding Planning</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="prose prose-lg max-w-none"
              >
                <p className="text-gray-700 mb-8">
                  Planning a wedding involves numerous tasks, and it can be overwhelming. Here's a comprehensive checklist to keep you organized:
                </p>

                <div className="space-y-8">
                  {weddingChecklist.map((section, index) => (
                    <motion.div
                      key={index}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                      className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary"
                    >
                      <h2 className="font-playfair text-2xl text-gray-900 mb-4">
                        {section.timeframe}
                      </h2>
                      <ul className="space-y-2">
                        {section.tasks.map((task, taskIndex) => (
                          <li key={taskIndex} className="flex items-start">
                            <span className="text-primary mr-2">•</span>
                            <span className="text-gray-700">{task}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="text-gray-700 mt-8 text-center font-medium"
                >
                  With this checklist in hand, you can navigate the planning process smoothly and enjoy your special day to the fullest!
                </motion.p>
              </motion.div>
            </motion.article>
          </div>
          <Footer />
        </div>
      );
    default:
      return <div>Blog post not found</div>;
  }
};

export default BlogPost; 
