import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
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
      scale: 1.1,
      boxShadow: "0px 4px 15px rgba(139, 92, 246, 0.5)",
    },
    tap: { scale: 0.95 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="navbar fixed w-screen flex items-center z-10 p-4 font-inter bg-transparent"
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.15, rotate: 3 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex items-center"
      >
        <img
          src="logo.png"
          alt="Logo"
          className="h-12 w-60 pr-2 cursor-pointer"
        />
      </motion.div>

      {/* Nav Links */}
      <ul className="flex space-x-8 pl-4">
        {["Home", "About Us", "Events", "Contact", "Blog"].map((link, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.1, color: "#8b5cf6", letterSpacing: "2px" }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <a
              href="#"
              className="text-white hover:text-purple-400 transition duration-300 cursor-pointer"
            >
              {link}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Button */}
      <motion.div
        className="ml-auto pr-20"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-purple-500 text-white font-bold py-2 px-6 rounded-full transition duration-300 font-inter shadow-md"
        >
          Join Us
        </motion.button>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
