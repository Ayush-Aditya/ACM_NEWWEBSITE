'use client';

import React from "react";

import Navbar from "@/components/Navbar";
import AnimatedText from "@/components/animatedTEXT";
import Gallery from "@/components/gallery";
import Button from "@/components/button";

const Landing = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center max-w-screen shadow-lg"
        style={{ backgroundImage: "url('ACMBACKGROUND.jpg')" }}
      >
        <h1 className="text-white text-7xl font-inter"> 
          ACM STUDENT'S 
          CHAPTER
        </h1>
      </div>

      <div>
        <AnimatedText />
      </div>

      <div></div>

      <div className="bg-black">
        <Gallery />
      </div>
    </div>
  );
};

export default Landing;