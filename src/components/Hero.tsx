import { motion } from 'framer-motion';
import mandala from "../images/mandala.svg";

const Hero = () => {
  return (
    <div className="relative h-[733px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-[url('/src/images/Hero.png')]">
        <div className="absolute inset-0 bg-black/65" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4">
        <motion.span
          className="font-playfair text-lg md:text-2xl tracking-[5px] uppercase mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Wedding Designer
        </motion.span>

        <motion.h1
          className="font-playfair text-4xl md:text-7xl lg:text-[90px] leading-tight mb-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          ROYAL ELITE WEDDING
        </motion.h1>

        <motion.p
          className="font-playfair text-lg md:text-2xl max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          {/* Add the mandala SVG */}
          <img src={mandala} alt="Mandala" className="w-24 h-24 mt-4" />
        </motion.p>
      </div>
    </div>
  );
};

export default Hero;
