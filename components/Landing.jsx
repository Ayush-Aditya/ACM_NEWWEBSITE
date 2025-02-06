'use client';

import React from "react";


import Navbar from "@/components/Navbar";
import AnimatedText from "@/components/animatedTEXT";
import Gallery from "@/components/gallery";
const Landing = () => {
  return (
    <div className="bg-black">
      <Navbar />
       <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center max-w-scren"
        style={{ backgroundImage: "url('Top-8-Coding-Platforms-for-Data-Science-Beginner-01-scaled.jpg')" }}
      >
      
        <div className="absolute inset-0 bg-black opacity-45"></div>
        <img
          src="Group 16.svg"
          alt="Right Image"
          id="P1R"
          className="absolute right-5 md:right-10 lg:right-16 xl:right-20 
          top-1/2 transform -translate-y-1/3 
          w-auto h-auto 
          max-w-[90%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[50%] xl:max-w-[40%] 
          rounded-lg shadow-lg"        />
      </div>

  
      <div>
        <AnimatedText />
      </div>
      <div>

      </div>
      
      <div className="bg-black">
        <Gallery />
      </div>
    </div>



  );
};

export default Landing;