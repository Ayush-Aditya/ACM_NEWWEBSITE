'use client';

import React from "react";


import Navbar from "@/components/components/Navbar"; 
import AnimatedText from "@/components/components/animatedTEXT";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div
        className="relative h-screen bg-cover bg-center flex items-center justify-center w-screen"
        style={{ backgroundImage: "url('Top-8-Coding-Platforms-for-Data-Science-Beginner-01-scaled.jpg')" }}
      >
        {/*this div is for layering bblack on top of bg dont delete it */}
        <div className="absolute inset-0 bg-black opacity-45"></div>
        <img
          src="Group 16.svg"
          alt="Right Image"
          id="P1R"
          className="absolute right-5 md:right-10 lg:right-16 xl:right-20 top-1/2 transform -translate-y-1/3 w-auto h-auto max-w-[55%] md:max-w-[50%] lg:max-w-[55%] xl:max-w-[55%] rounded-lg shadow-lg"
        />
      </div>

      {/* THIS IS WHERE THE NEW PAGE STARTS IE THE ANIMATED TEXT SECTION*/}

      <div>
      <AnimatedText />
      </div>

      {/*THIS IS WHERE THE GALLERY STARTS  */}
      <div>
          
      </div>
</div>

    
    
  );
};

export default Home;