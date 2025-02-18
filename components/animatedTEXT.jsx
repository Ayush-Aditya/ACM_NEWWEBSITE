import { motion } from "framer-motion";

export default function AnimatedText() {
  return (
    <div className="bg-black text-white w-full flex flex-col items-center justify-center px-8 py-16">
      <div className="w-full max-w-4xl">
        {/* Section Label */}
        <motion.div
          whileHover={{ scale: 1.1, color: "#8b5cf6" }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-purple-500 font-medium text-4xl tracking-wide mb-2 cursor-pointer"
        >
          01 | WHO WE ARE
          
          
        </motion.div>

        <div className="flex flex-col md:flex-row pt-4 items-start">
          {/* Icon */}
          <motion.div
            whileHover={{ scale: 1.2, rotate: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="mr-4 mb-4 md:mb-0"
          >
            <div className="bg-purple-500 text-black rounded-full w-12 h-12  flex items-center justify-center cursor-pointer">
              <span className="text-2xl ">📦</span>
            </div>
          </motion.div>

          {/* Text Content */}
          <div>
            <motion.h1
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-2xl md:text-2xl pt-4 font-bold leading-tight mb-4 cursor-pointer"
            >
              We are {" "}
              <motion.span
                whileHover={{ color: "#8b5cf6", scale: 1.2 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="text-purple-500 cursor-pointer"
              >
                ACM BIT Mesra
              </motion.span>{" "}
              the official student chapter of the Association for Computing Machinery (ACM) at Birla Institute of Technology, Mesra. We are a dynamic community of tech enthusiasts, coders, researchers, and problem solvers who are passionate about computer science, innovation, and open-source contributions.
            </motion.h1>
            <motion.p
              whileHover={{ color: "#ffffff", scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-gray-400 pt-6 text-base cursor-pointer"
            >
              At ACM BIT Mesra, we strive to foster a culture of learning, collaboration, and excellence by organizing coding contests, hackathons, workshops, and speaker sessions. Our members actively engage in competitive programming, artificial intelligence, software development, cybersecurity, and research—pushing the boundaries of technology and innovation.

              We believe in knowledge sharing and mentorship, helping students develop technical skills, explore cutting-edge technologies, and prepare for careers in academia and the industry. Whether you're a beginner or an expert, ACM BIT Mesra provides the perfect platform to learn, build, and innovate alongside like-minded peers.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-12 w-full text-center" // Adjusted margin & centered
      >
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-inter text-white transition-all duration-300 hover:text-shadow-[#ffff] tracking-widest">
          GALLERY
        </h1>
      </motion.div>
    </div>
  );
}
