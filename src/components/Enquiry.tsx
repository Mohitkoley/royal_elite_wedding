import { motion } from 'framer-motion';
import quoteImage from '../images/quote.png';

const Enquiry = () => {
  return (
    <>
      <motion.div
        className="main-container w-full h-auto bg-[#3d3a23] relative mx-auto my-0 px-16 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.span
          className="flex w-full h-auto justify-center items-center font-['Inter'] text-[16px] font-normal leading-[19px] text-[#fff] relative text-center uppercase whitespace-nowrap mt-[0.17px] mr-0 mb-0 ml-0"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5 }}
        >
          To Know about Our Offers
        </motion.span>
        <motion.span
          className="flex w-full h-auto justify-center items-center font-['Playfair_Display'] text-[50px] font-normal leading-[66.65px] text-[#fff] relative text-center whitespace-nowrap z-[1] mt-[15px] mr-0 mb-0 ml-0"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Enquire Now
        </motion.span>
        <motion.span
          className="flex w-full h-auto justify-center items-center font-['Playfair_Display'] text-[26px] font-normal leading-[34.658px] text-[#fff] relative text-center whitespace-nowrap z-[2] mt-[15px] mr-0 mb-0 ml-0"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          You can call us on this number, ASAP!
        </motion.span>
        <motion.div
          className="w-full h-auto relative z-[4] mt-[20px] flex justify-center mr-0 mb-0 ml-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <img src={quoteImage} alt="Quote" className="w-10 h-auto bg-no-repeat " />
        </motion.div>
        <motion.span
          className="flex w-full h-auto justify-center items-start font-['Inter'] text-[23.3359375px] font-semibold leading-[28px] text-[#fff] tracking-[-0.5px] relative text-center whitespace-nowrap z-[3] mt-[20px] mr-0 mb-0 ml-0"
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          +16465262336 - +15166054010
        </motion.span>
      </motion.div>
    </>
  );
}

export default Enquiry;
