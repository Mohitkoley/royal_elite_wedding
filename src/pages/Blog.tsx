import React from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

interface BlogPost {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    title: "Essential Checklist for Planning Your Dream Wedding",
    excerpt: "Planning a wedding involves numerous tasks, and it can be overwhelming. Here's a comprehensive checklist to keep you organized: 12-18 […]",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6",
    date: "March 15, 2024",
    slug: "wedding-checklist"
  },
  {
    title: "A Complete Guide to Choosing the Perfect Venue",
    excerpt: "Selecting the right venue is one of the most important decisions in your wedding planning process. Here's a comprehensive guide […]",
    image: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3",
    date: "March 10, 2024",
    slug: "venue-guide"
  },
  {
    title: "Top 5 Wedding Trends of 2024",
    excerpt: "As wedding trends evolve, couples are continually seeking fresh ideas to make their special day unique and memorable. Here are […]",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    date: "March 5, 2024",
    slug: "wedding-trends"
  }
];

const MotionLink = motion(Link);

const Blog: React.FC = () => {
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
            Our Blog
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the latest trends, tips, and inspiration for your special events
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden border-2 border-primary/20 hover:border-primary/40 transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <span className="text-primary-dark text-sm">{post.date}</span>
                <h2 className="font-playfair text-xl text-gray-900 mt-2 mb-3">
                  {post.title}
                </h2>
                <p className="text-gray-600 text-sm mb-4">
                  {post.excerpt}
                </p>
                <MotionLink
                  to={`/blog/${post.slug}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block bg-primary-dark text-white px-4 py-2 rounded-md text-sm hover:bg-primary-darker transition-colors duration-300"
                >
                  Read More
                </MotionLink>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog; 
