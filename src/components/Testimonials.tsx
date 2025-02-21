import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import Design from '../images/design.svg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Bride",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote: "Royal Elite Events made our dream wedding a reality. Their attention to detail and creativity exceeded our expectations.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Groom",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    quote: "The team's professionalism and dedication to creating a perfect event was remarkable. Every detail was handled with care.",
    rating: 5
  },
  {
    name: "Emily Rodriguez",
    role: "Corporate Client",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    quote: "Our company event was flawlessly executed. The attention to detail and creative touches made it memorable.",
    rating: 5
  },
  {
    name: "David Thompson",
    role: "Groom",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    quote: "Working with Royal Elite Events was a pleasure. They turned our vision into reality with such elegance and style.",
    rating: 5
  },
  {
    name: "John & Sarah",
    role: "Wedding Couple",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote: "Royale Elite Events exceeded our expectations with their creativity and attention to detail. Our wedding day was more beautiful than we could have imagined.",
    rating: 5
  },
  {
    name: "Raj & Priya",
    role: "Wedding Couple",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    quote: "The team's professionalism and dedication to creating a perfect event was remarkable. Every detail was handled with care.",
    rating: 5
  }
];

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative bg-cream py-16 md:py-24 overflow-hidden">
      {/* Top Decorative Pattern */}
      <motion.div 
        className="pattern-border w-full absolute top-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
      
      {/* Swastik Decorations with enhanced positioning */}
      <img src={Design} alt="" className='absolute w-28 h-28 top-12 left-12' />
      <img src={Design} alt="" className='absolute w-28 h-28 bottom-12 right-12' />

      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="text-gray-600 uppercase tracking-[3px] font-inter"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            Testimonials
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-playfair mt-4 mb-6 text-gray-900"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4 }}
          >
            What Our Clients Say
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-primary mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
        >
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[EffectCoverflow, Pagination, Autoplay]}
            className="testimonials-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div 
                  className="bg-white rounded-lg shadow-xl p-8 mx-4 my-8 relative"
                  whileHover={{ 
                    y: -10,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex flex-col items-center">
                    <motion.div 
                      className="w-24 h-24 rounded-full overflow-hidden mb-6"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <motion.p 
                      className="text-gray-700 text-lg text-center mb-6 font-playfair italic"
                      whileHover={{ scale: 1.02 }}
                    >
                      "{testimonial.quote}"
                    </motion.p>
                    <motion.div 
                      className="text-center"
                      whileHover={{ y: -2 }}
                    >
                      <h4 className="text-xl font-playfair text-gray-900 mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-primary font-inter">
                        {testimonial.role}
                      </p>
                    </motion.div>
                    <div className="flex gap-1 mt-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.svg
                          key={i}
                          className="w-5 h-5 text-yellow-400 fill-current"
                          whileHover={{ scale: 1.2, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                        </motion.svg>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>

      {/* Bottom Decorative Pattern */}
      <motion.div 
        className="pattern-border w-full h-16 absolute bottom-0 transform rotate-180"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
};

export default Testimonials; 
