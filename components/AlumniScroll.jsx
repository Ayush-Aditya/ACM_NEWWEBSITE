import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const AlumniCard = ({ name, position, image }) => (
  <motion.div 
    className="min-w-[240px] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] rounded-xl overflow-hidden mx-3 backdrop-blur-sm border border-gray-800"
    whileHover={{ 
      scale: 1.05,
      boxShadow: "0 0 20px rgba(230, 68, 103, 0.3)",
    }}
    transition={{ duration: 0.3 }}
  >
    <div className="relative w-full h-[200px] group">
      <img 
        src={image || "/image.png"} 
        alt={name} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <motion.div 
      className="p-4 text-white relative"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute -top-6 left-4 bg-[#E64467] rounded-full p-1.5 shadow-lg transform -translate-y-1/2 group-hover:scale-110 transition-transform duration-300">
        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      </div>
      <h3 className="text-lg font-bold mb-1 bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
        {name}
      </h3>
      <p className="text-gray-300 text-xs">{position}</p>
    </motion.div>
  </motion.div>
);

const AlumniScroll = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const alumni = [
    { 
      name: "John Doe", 
      position: "Software Engineer at Google", 
      image: "/" 
    },
    { 
      name: "Jane Smith", 
      position: "Product Manager at Meta", 
      image: "/" 
    },
    { 
      name: "Mike Johnson", 
      position: "Data Scientist at Amazon", 
      image: "/" 
    },
    { 
      name: "Sarah Wilson", 
      position: "Frontend Developer at Apple", 
      image: "/" 
    },
    { 
      name: "Alex Brown", 
      position: "ML Engineer at Microsoft", 
      image: "/" 
    },
  ];

  useEffect(() => {
    if (!isPaused) {
      const scrollInterval = setInterval(() => {
        setScrollPosition((prev) => {
          const newPosition = prev + 0.5;
          const containerWidth = alumni.length * 246; // Card width (240px) + margin (6px)
          return newPosition >= containerWidth ? 0 : newPosition;
        });
      }, 20);

      return () => clearInterval(scrollInterval);
    }
  }, [isPaused, alumni.length]);

  return (
    <div className="w-full bg-black py-16">
      <motion.div 
        className="container mx-auto px-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="flex items-center mb-12">
          <motion.div 
            className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-xl flex items-center justify-center transform rotate-3"
            whileHover={{ scale: 1.1, rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </motion.div>
          <div className="ml-4">
            <motion.h2 
              className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              OUR ALUMNI
            </motion.h2>
            
          </div>
        </div>
        
        <div 
          className="overflow-hidden relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <motion.div 
            className="flex whitespace-nowrap"
            style={{ transform: `translateX(-${scrollPosition}px)` }}
            transition={{ type: "tween", ease: "linear" }}
          >
            {[...alumni, ...alumni, ...alumni, ...alumni].map((person, index) => (
              <AlumniCard 
                key={index}
                name={person.name}
                position={person.position}
                image={person.image}
              />
            ))}
          </motion.div>
          
          {/* Gradient Overlays */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-black to-transparent pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-black to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};

export default AlumniScroll; 