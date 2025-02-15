import { motion } from 'framer-motion';

interface SwastikProps {
  className?: string;
  size?: number;
  color?: string;
}

const Swastik = ({ className = '', size = 40, color = '#D2042D' }: SwastikProps) => {
  const variants = {
    initial: { 
      rotate: 0,
      scale: 1
    },
    animate: { 
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear"
      }
    },
    hover: {
      scale: 1.2,
      filter: "brightness(1.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  };

  return (
    <motion.div
      className={`absolute cursor-pointer ${className}`}
      initial="initial"
      animate="animate"
      whileHover="hover"
      variants={variants}
    >
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 142 155"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g transform="translate(0.000000,155.000000) scale(0.100000,-0.100000)"
          fill={color} 
          stroke="none"
        >
          <path d="M74 1540 c-51 -20 -70 -92 -34 -125 37 -33 44 -106 31 -317 -12 -207
            -9 -256 20 -304 34 -56 83 -69 259 -69 85 1 187 4 227 8 l71 7 6 -48 c9 -66
            12 -319 4 -327 -3 -4 -100 -8 -215 -9 -171 -1 -217 -5 -258 -20 -66 -23 -156
            -84 -175 -118 -13 -25 -13 -31 4 -62 34 -64 80 -66 144 -9 50 46 90 53 308 53
            110 0 215 5 236 10 53 15 105 77 114 135 3 26 5 128 2 226 -4 154 -3 179 11
            184 8 3 88 9 178 12 136 5 163 4 164 -8 1 -8 1 -97 -1 -199 -3 -255 19 -357
            92 -431 35 -34 65 -37 101 -9 42 33 43 55 5 128 l-33 66 -5 255 c-5 266 -7
            276 -52 318 -41 38 -98 46 -278 39 -91 -4 -175 -9 -187 -12 -20 -5 -21 -1 -28
            78 -4 45 -7 137 -8 203 l-2 120 250 5 c233 5 253 7 291 27 90 48 122 129 68
            172 -36 29 -72 26 -107 -6 -35 -34 -98 -41 -317 -33 -216 7 -262 -3 -314 -74
            -19 -25 -21 -44 -24 -189 -2 -89 1 -197 6 -241 7 -61 6 -79 -5 -83 -7 -3 -100
            -6 -205 -7 l-193 -1 1 75 c0 41 2 147 5 235 5 183 -9 247 -65 309 -35 39 -61
            49 -92 36z" />
          <path d="M380 1180 c-45 -45 -11 -120 53 -120 42 0 67 26 67 68 0 41 -31 72
            -70 72 -17 0 -39 -9 -50 -20z" />
          <path d="M942 1177 c-45 -48 -14 -117 51 -117 42 0 70 29 70 72 0 61 -78 91
            -121 45z" />
          <path d="M382 597 c-43 -46 -16 -117 46 -119 43 -1 72 26 72 69 0 66 -74 97
            -118 50z" />
          <path d="M942 597 c-65 -69 34 -163 102 -97 11 11 19 33 19 51 0 62 -78 92
            -121 46z" />
        </g>
      </svg>
    </motion.div>
  );
};

export default Swastik; 
