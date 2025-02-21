import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Footer from '../components/Footer';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
  event: string;
  date: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah & Michael",
    role: "Bride & Groom",
    content: "Our wedding day was absolutely perfect thanks to Royale Elite Events. Their attention to detail and professional service made our dream wedding come true. Every moment was magical!",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    event: "Wedding Ceremony & Reception",
    date: "March 2024"
  },
  {
    id: 2,
    name: "Jennifer Thompson",
    role: "Corporate Client",
    content: "The team went above and beyond for our company's annual gala. The decor, timing, and execution were flawless. Our guests were thoroughly impressed!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    event: "Corporate Gala",
    date: "February 2024"
  },
  {
    id: 3,
    name: "David & Emma",
    role: "Anniversary Couple",
    content: "We couldn't have asked for a better team to plan our 25th anniversary celebration. Every detail was thoughtfully planned and executed perfectly.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    event: "Anniversary Celebration",
    date: "January 2024"
  },
  {
    id: 4,
    name: "John & Sarah",
    role: "Wedding Couple",
    content: "Royale Elite Events exceeded our expectations with their creativity and attention to detail. Our wedding day was more beautiful than we could have imagined.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    event: "Wedding Ceremony & Reception",
    date: "December 2023"
  }
];

const TestimonialsPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
            What Our Clients Say
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read what our clients have to say about their experiences with us
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-xl overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/2 h-[400px]">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center bg-white">
                  <div className="mb-6">
                    <h2 className="font-playfair text-3xl text-gray-900 mb-2">
                      {testimonials[currentIndex].name}
                    </h2>
                    <p className="text-primary-dark font-medium">
                      {testimonials[currentIndex].role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {testimonials[currentIndex].event} - {testimonials[currentIndex].date}
                    </p>
                  </div>
                  <blockquote className="text-gray-700 text-lg italic mb-6">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary-dark scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TestimonialsPage; 
