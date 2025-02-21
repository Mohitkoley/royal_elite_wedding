import React, { useState, FormEvent } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';

interface ContactFormData {
  name: string;
  fianceName: string;
  phone: string;
  email: string;
  venue: string;
  eventDate: string;
  plannerName: string;
  eventType: string;
  guestCount: string;
  eventDetails: string;
  budget: string;
  referralSource: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    fianceName: '',
    phone: '',
    email: '',
    venue: '',
    eventDate: '',
    plannerName: '',
    eventType: '',
    guestCount: '',
    eventDetails: '',
    budget: '',
    referralSource: ''
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
    <div className="min-h-screen bg-cream">
      <div className="pt-20">
        <section className="bg-cream py-16 md:py-24 relative overflow-hidden">
          {/* Decorative Pattern */}
          <motion.div
            className="pattern-border w-full h-10 absolute top-0"
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />

          <motion.div
            className="container mx-auto px-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="text-center mb-12"
              variants={itemVariants}
            >
              <h2 className="font-playfair text-4xl md:text-5xl text-gray-900 mb-4">
                Contact Us
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Get in touch for more info
              </p>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We handle everything from conceptualization to execution, so you can enjoy every moment.
              </p>
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
                    >
                      <Phone className="w-5 h-5 text-primary-light" />
                      <span>+16465262336 - +15166054010</span>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-4"
                      whileHover={{ x: 10 }}
                    >
                      <Mail className="w-5 h-5 text-primary-light" />
                      <span>info@royaleliteevents.com</span>
                    </motion.div>
                    <motion.div
                      className="flex items-start gap-4"
                      whileHover={{ x: 10 }}
                    >
                      <MapPin className="w-5 h-5 text-primary-light mt-1" />
                      <span>
                        Hicksville, Queens, Glen Cove, Bellrose, Valley Stream, Brooklyn, New Jersey, Connecticut, Pennsylvania, New York.
                      </span>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  className="lg:w-2/3 p-8 lg:p-12"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                >
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-700 font-medium mb-2">
                        First & Last Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-700 font-medium mb-2">
                        Fiance's First & Last Name
                      </label>
                      <input
                        type="text"
                        name="fianceName"
                        value={formData.fianceName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-700 font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-700 font-medium mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-700 font-medium mb-2">
                        Venue or Location of Event
                      </label>
                      <input
                        type="text"
                        name="venue"
                        value={formData.venue}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-700 font-medium mb-2">
                        Date of Event
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-700 font-medium mb-2">
                        Planner's Name (If Applicable)
                      </label>
                      <input
                        type="text"
                        name="plannerName"
                        value={formData.plannerName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-700 font-medium mb-2">
                        Type of Event
                      </label>
                      <input
                        type="text"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                        required
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-700 font-medium mb-2">
                        Estimated Guest Count
                      </label>
                      <input
                        type="number"
                        name="guestCount"
                        value={formData.guestCount}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants}>
                      <label className="block text-gray-700 font-medium mb-2">
                        Event Budget
                      </label>
                      <input
                        type="text"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants} className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-2">
                        Tell Us More About Your Event
                      </label>
                      <textarea
                        name="eventDetails"
                        value={formData.eventDetails}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                      />
                    </motion.div>

                    <motion.div variants={itemVariants} className="md:col-span-2">
                      <label className="block text-gray-700 font-medium mb-2">
                        How Did You Hear About Us?
                      </label>
                      <input
                        type="text"
                        name="referralSource"
                        value={formData.referralSource}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </motion.div>

                    <motion.div className="md:col-span-2">
                      <motion.button
                        type="submit"
                        className="w-full bg-primary-dark text-white py-3 px-6 rounded-md hover:bg-primary-darker transition-colors duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Send
                      </motion.button>
                    </motion.div>
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
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage; 
