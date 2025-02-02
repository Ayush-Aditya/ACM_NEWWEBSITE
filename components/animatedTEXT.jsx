import { motion } from "framer-motion";

export default function AnimatedText() {
  return (
    <div className="bg-black text-white h-screen w-full flex flex-col items-center justify-center px-8">
      <div className="w-full max-w-4xl">
        {/* Section Label */}
        <motion.div
          whileHover={{ scale: 1.1, color: "#8b5cf6" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-purple-500 font-medium text-sm tracking-wide mb-2 cursor-pointer"
        >
          01 | WHO WE ARE
        </motion.div>

        <div className="flex items-start">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.2, rotate: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mr-4"
          >
            <div className="bg-purple-500 text-black rounded-full w-12 h-12 flex items-center justify-center cursor-pointer">
              <span className="text-2xl">📦</span>
            </div>
          </motion.div>

          {/* Text Content */}
          <div>
            <motion.h1
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-4xl font-bold leading-tight mb-4 cursor-pointer"
            >
              We are a{" "}
              <motion.span
                whileHover={{ color: "#8b5cf6", scale: 1.2 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-purple-500 cursor-pointer"
              >
                group of experts
              </motion.span>{" "}
              looking to help companies leverage technology to do more than they
              had ever thought possible.
            </motion.h1>
            <motion.p
              whileHover={{ color: "#ffffff", scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-gray-400 text-base cursor-pointer"
            >
              We do this through a number of services to provide comprehensive
              solutions for your business. Scroll down to read about what we can
              do for you.
            </motion.p>


            

          </div>
        </div>
        {/* Gallery Section (Moved Down and Styled) */}
          
      </div>
      <motion.div
  initial={{ opacity: 0, y: 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5, delay: 0.2 }}
  className="mt-16 w-full text-left" // Align left for consistent spacing
>
  <h1 className="text-5xl md:text-7xl lg:text-9xl font-inter text-white transition-all duration-300 hover:text-shadow-[#ffff] pl-10 md:pl-15 lg:pl-18 tracking-widest"> {/* Added padding and tracking */}
    GALLERY
  </h1>
</motion.div>
    </div>
  );
}