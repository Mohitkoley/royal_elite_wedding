import React, { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
      {/* Decorative Pattern */}
      <motion.div
        className="pattern-border w-full h-10 absolute top-0"
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      <motion.div
        className="container mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="text-center mb-12"
          variants={itemVariants}
        >
          <motion.span
            className="font-inter text-base uppercase tracking-[3px] text-gray-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Get In Touch
          </motion.span>
          <motion.h2
            className="font-playfair text-4xl md:text-5xl text-gray-900 mt-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
          >
            Contact Us
          </motion.h2>
          <motion.div
            className="w-24 h-1 bg-primary mx-auto my-6"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        <motion.div
          className="bg-white/90 rounded-lg shadow-xl overflow-hidden"
          variants={itemVariants}
        >
          <div className="flex flex-col lg:flex-row">
            {/* Contact Information */}
            <motion.div
              className="lg:w-1/3 bg-primary-dark text-white p-8 lg:p-12"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <h3 className="font-playfair text-2xl mb-6">Contact Information</h3>
              <div className="space-y-6">
                <motion.div
                  className="flex items-center gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Phone className="w-5 h-5 text-primary-light" />
                  <span>+16465262336 - +15166054010</span>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="w-5 h-5 text-primary-light" />
                  <span>info@royaleliteevents.com</span>
                </motion.div>
                <motion.div
                  className="flex items-start gap-4"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <MapPin className="w-5 h-5 text-primary-light mt-1" />
                  <span>
                    New Jersey, Connecticut,
                    <br />
                    Pennsylvania, New York.
                  </span>
                </motion.div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:w-2/3 p-8 lg:p-12"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      required
                    />
                  </motion.div>
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none transition-all duration-300"
                    required
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  className="btn btn-primary w-full md:w-auto"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Bottom Decorative Pattern */}
      <motion.div
        className="pattern-border w-full h-10 absolute bottom-0 transform rotate-180"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
    </section>
  );
};

export default Contact; 
