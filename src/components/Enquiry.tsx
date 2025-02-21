import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import quoteImage from '../images/quote.png';
import Design from '../images/design.svg';

const Enquiry = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <>
      <motion.div
        ref={ref}
        className="main-container w-full h-auto bg-[#3d3a23] relative mx-auto my-0 px-16 py-16"
        initial="hidden"
        animate={controls}
        variants={variants}
        whileHover={{
          backgroundColor: "#4d4933",
          transition: { duration: 0.3 }
        }}
      >
        <img 
          src={Design} 
          alt="" 
          className='absolute w-28 h-28 top-12 left-12' 
          style={{ filter: 'brightness(0) invert(1)' }} 
        />
        <img 
          src={Design} 
          alt="" 
          className='absolute w-28 h-28 bottom-12 right-12' 
          style={{ filter: 'brightness(0) invert(1)' }} 
        />

        <motion.span
          className="flex w-full h-auto justify-center items-center font-['Inter'] text-[16px] font-normal leading-[19px] text-[#fff] relative text-center uppercase whitespace-nowrap mt-[0.17px] mr-0 mb-0 ml-0"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          whileHover={{
            letterSpacing: "2px",
            scale: 1.05,
            transition: { duration: 0.3 }
          }}
          transition={{ duration: 0.5 }}
        >
          To Know about Our Offers
        </motion.span>

        <motion.span
          className="flex w-full h-auto justify-center items-center font-['Playfair_Display'] text-[50px] font-normal leading-[66.65px] text-[#fff] relative text-center whitespace-nowrap z-[1] mt-[15px] mr-0 mb-0 ml-0"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          whileHover={{
            scale: 1.02,
            textShadow: "0 0 8px rgba(255,255,255,0.3)",
            transition: { duration: 0.3 }
          }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Enquire Now
        </motion.span>

        <motion.span
          className="flex w-full h-auto justify-center items-center font-['Playfair_Display'] text-[26px] font-normal leading-[34.658px] text-[#fff] relative text-center whitespace-nowrap z-[2] mt-[15px] mr-0 mb-0 ml-0"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          whileHover={{
            scale: 1.05,
            color: "#ffd700",
            transition: { duration: 0.3 }
          }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          You can call us on this number, ASAP!
        </motion.span>

        <motion.div
          className="w-full h-auto relative z-[4] mt-[20px] flex justify-center mr-0 mb-0 ml-0 cursor-pointer"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          whileHover={{
            scale: 1.2,
            rotate: 360,
            transition: { duration: 0.5 }
          }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <img 
            src={quoteImage} 
            alt="Quote" 
            className="w-10 h-auto bg-no-repeat"
          />
        </motion.div>

        <motion.span
          className="flex w-full h-auto justify-center items-start font-['Inter'] text-[23.3359375px] font-semibold leading-[28px] text-[#fff] tracking-[-0.5px] relative text-center whitespace-nowrap z-[3] mt-[20px] mr-0 mb-0 ml-0 cursor-pointer"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          whileHover={{
            scale: 1.1,
            color: "#ffd700",
            textShadow: "0 0 8px rgba(255,215,0,0.3)",
            transition: { duration: 0.3 }
          }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          +16465262336 - +15166054010
        </motion.span>
      </motion.div>
    </>
  );
}

export default Enquiry;
