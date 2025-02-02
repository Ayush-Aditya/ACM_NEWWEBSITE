import { motion } from "framer-motion";

export default function AnimatedText() {
  return (
    <div className="bg-black text-white h-screen w-screen flex flex-col items-center justify-center px-8">
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
      </div>
    </div>
  );
}
