"use client";

import React from "react";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
// ** Desktop Grid Layout **
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

const Gallery = () => {
  // Slider settings for mobile
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="bg-black w-full min-h-screen flex flex-col items-center justify-center p-4">
      {/* Desktop View */}
      <div className="hidden md:flex w-[80%] h-[80vh]">
        <motion.div
          className="grid grid-cols-6 grid-rows-4 gap-2 w-full h-full"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {images.map((src, index) => (
            <motion.div
              key={index}
              className={`${gridLayout[index % gridLayout.length]} bg-gray-800 rounded-lg shadow-lg`}
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

      {/* Mobile View */}
      <div className="md:hidden w-full max-w-sm">
        <Slider {...sliderSettings}>
          {images.map((src, index) => (
            <div key={index} className="p-2">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-[250px] object-cover rounded-lg shadow-lg"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
