import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.2, duration: 0.8, ease: "easeOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
    hover: { scale: 1.1, boxShadow: "0px 4px 15px rgba(139, 92, 246, 0.5)" },
    tap: { scale: 0.95 },
  };

  return (
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="fixed top-0 left-0 right-0 z-50 bg-transparent  backdrop-blur-md px-6 py-4 flex justify-between items-center w-full"
    >
      {/* Logo */}
      <motion.div
        whileHover={{ scale: 1.1, rotate: 3 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <img src="logo.png" alt="Logo" className="h-10 cursor-pointer" />
      </motion.div>

      {/* Desktop Nav Links */}
      <ul className="hidden md:flex space-x-8">
        {["Home", "About Us", "Events", "Hack-A-Bit", "Contact"].map((link, index) => (
          <motion.li
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.1, color: "#8b5cf6", letterSpacing: "1px" }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <a href="#" className="text-white hover:text-purple-400 transition duration-300">
              {link}
            </a>
          </motion.li>
        ))}
      </ul>

      {/* Join Us Button */}
      <motion.div variants={buttonVariants} initial="hidden" animate="visible" className="hidden md:block">
        <motion.button
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="bg-purple-500 text-white font-bold py-2 px-6 rounded-full shadow-md"
        >
          Join Us
        </motion.button>
      </motion.div>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute top-full left-0 w-full bg-black bg-opacity-90 flex flex-col items-center py-6 space-y-4 md:hidden"
          >
            {["Home", "About Us", "Events", "Contact", "Blog"].map((link, index) => (
              <motion.a
                key={index}
                href="#"
                className="text-white text-lg hover:text-purple-400 transition duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(false)}
              >
                {link}
              </motion.a>
            ))}
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              className="bg-purple-500 text-white font-bold py-2 px-6 rounded-full shadow-md"
            >
              Join Us
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
