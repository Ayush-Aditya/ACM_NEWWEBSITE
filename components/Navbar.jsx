import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Variants for complex staggered animations
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2,
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#8b5cf6",
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/10 backdrop-blur-sm shadow-md'
          : 'bg-white/10 backdrop-blur-sm shadow-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo and Text */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="flex items-center space-x-3"
          >
            <img
              src="/acm.png"
              alt="ACM Logo"
              className="h-8 md:h-10"
            />
            <div className="hidden sm:flex flex-col">
              <span className="text-white font-medium text-sm md:text-base">ACM</span>
              <span className="text-gray-300 text-xs md:text-sm">student's chapter BIT Mesra</span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About Us", "Events", "Hackabit", "Contact"].map((link, index) => (
              <motion.a
                key={index}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                variants={itemVariants}
                whileHover={{ scale: 1.1, color: "#8b5cf6" }}
                className="text-white hover:text-purple-400 transition-colors duration-300 text-sm font-medium"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Join Us Button */}
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            className="bg-purple-600 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:shadow-lg"
          >
            Join Us
          </motion.button>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-purple-400 transition-colors duration-300">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
