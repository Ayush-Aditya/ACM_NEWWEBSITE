import { motion } from "framer-motion";

export default function AnimatedText() {
  return (
    <div className="bg-black text-white min-h-screen w-full flex flex-col items-start justify-center px-8 md:px-16 lg:px-24 relative">
      {/* Section Label */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-[#8B5CF6] font-medium text-sm tracking-wide mb-6"
      >
        <div className="flex items-center pr-2 md:pr-12 xl:pr-36 hover:scale-105 transition-all duration-300 mb-8">
          <div className="text-sm sm:text-xl text-center flex gap-2">
            <div className="text-[#E64467] pr-1 sm:pr-4">01</div>
            <div className="text-[#E64467]">|</div>
            <div className="text-[#C6C6C6]">WHO WE ARE</div>
          </div>
          <div className="h-[0.08rem] flex-grow bg-gradient-to-r from-transparent to-white/80 " />
        </div>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-start gap-12 relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-2/3"
        >
          <div className="flex">
            <div className="bg-[url('/p2logo.png')] w-20 h-20 bg-cover group-hover:rotate-12 transition-transform duration-500"/>
            <div className="flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="ml-4">
                <motion.h1 className="text-4xl font-bold text-purple-400 bg-clip-text">
                  ABOUT US
                </motion.h1>
              </div>
            </div>
          </div>
          <p className="text-gray-300 text-lg leading-relaxed">
            The ACM Student Chapter at BIT Mesra, the institute's most reputed tech club,
            fosters a culture of excellence by providing a platform for students to develop
            skills, explore innovations, and engage in collaborative projects through workshops,
            seminars, and hackathons. It brings together passionate learners, promotes peer
            learning, and empowers members to be at the forefront of technological progress.
          </p>
        </motion.div>

        {/* ACM Logo Watermark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 0.1, scale: 4 }}
          transition={{ duration: 0.8 }}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-1/2"
        >
          <img
            src="/acm.png"
            alt="ACM Logo"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </div>


      <h1 className="text-5xl md:text-7xl lg:text-9xl font-inter text-white transition-all duration-300 hover:text-shadow-[#ffff] pl-10 md:pl-20 lg:pl-18 tracking-widest mt-40">
        GALLERY
      </h1>
    </div>
  );
}