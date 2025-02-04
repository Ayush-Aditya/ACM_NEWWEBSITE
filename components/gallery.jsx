import React from "react";
import { motion } from "framer-motion";

const images = [
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
  "https://via.placeholder.com/150",
];

const gridLayout = [
  "col-span-2 row-span-2",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-2 row-span-2",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-1 row-span-1",
  "col-span-3 row-span-2",
  "col-span-2 row-span-1",
  "col-span-3 row-span-1",
  "col-span-2 row-span-1",
  "col-span-1 row-span-1",
  "col-span-3 row-span-2",
  "col-span-2 row-span-2",
  "col-span-2 row-span-1",
];

const Collage = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-black">
      <motion.div
        className="grid grid-cols-6 grid-rows-4 gap-2 p-2 w-[80%] h-[80%]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {images.map((src, index) => (
          <motion.div
            key={index}
            className={`${gridLayout[index]} bg-gray-800 rounded-lg shadow-lg`}
            style={{
              backgroundImage: `url('${src}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default Collage;
