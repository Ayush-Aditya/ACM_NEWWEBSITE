'use client';

import React from "react";
import Navbar from "@/components/Navbar";
import AnimatedText from "@/components/animatedTEXT";
import Gallery from "@/components/gallery";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Landing = () => {
  return (
    <div className="bg-black">
      <Navbar />

      <div
        className="relative min-h-screen bg-cover bg-center flex flex-col md:flex-row items-center justify-center md:justify-between px-6 md:px-16 max-w-screen before:absolute before:bottom-0 before:left-0 before:w-full before:h-4 before:bg-gradient-to-t before:from-black before:to-transparent"
      >
        {/* Background Image Based on Screen Size */}
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-500"
          style={{ 
            backgroundImage: "url('landingback.svg')" 
          }}
        ></div>
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-500 md:hidden before:absolute before:bottom-0 before:left-0 before:w-full before:h-4 before:bg-gradient-to-t before:from-black before:to-transparent"
          style={{ 
            backgroundImage: "url('IMG_20250218_154844.jpg')" 
          }}
        ></div>
        
        <div className="absolute inset-0 bg-black opacity-45"></div>
        
        <div className="relative z-10 text-center md:text-center text-white max-w-[90%] md:max-w-[50%] mx-auto">
          <h1 className="text-8xl  md:text-8xl font-inter whitespace-nowrap ">A C M</h1>
          <h2 className="text-2xl md:text-2xl lg:text-3xl font-semibold mt-4 text-purple-400">
            STUDENT'S CHAPTER BIT MESRA
          </h2>
          <div className="mt-8 flex justify-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-full text-lg">
              Let's Talk
            </button>
          </div>
          <div className="flex justify-center space-x-6 mt-6">
            <a href="#" className="text-gray-400 text-3xl hover:text-white"><FaFacebook /></a>
            <a href="#" className="text-gray-400 text-3xl hover:text-white"><FaInstagram /></a>
            <a href="#" className="text-gray-400 text-3xl hover:text-white"><FaLinkedin /></a>
          </div>
        </div>
        
        <img
          src="Group 16.svg"
          alt="Right Image"
          id="P1R"
          className="relative mt-10 md:mt-0 max-w-[90%] sm:max-w-[70%] md:max-w-[58%] lg:max-w-[58%] xl:max-w-[58%] pt-16 rounded-lg z-10 hidden md:block"
        />
      </div>

      <div className="pt-16">
        <AnimatedText />
      </div>

      <div className="bg-black pt-16">
        <Gallery />
      </div>
    </div>
  );
};

export default Landing;
