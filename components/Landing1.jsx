import React from "react";
import Navbar from "@/components/Navbar";
import AnimatedText from "@/components/animatedTEXT";
import Gallery from "@/components/gallery";

const Landing1 = () => {
  return (
    <div className="bg-black">
      <Navbar />
      <div
        className="relative min-h-screen w-full bg-cover bg-center sm:bg-top md:bg-center lg:bg-cover flex items-center justify-center shadow-lg"
        style={{ backgroundImage: "url('ACMBACKGROUND.jpg')" }}
      >
        <h1 className="text-white text-5xl sm:text-6xl md:text-7xl font-inter text-center px-4">
          ACM STUDENT'S CHAPTER
        </h1>
      </div>

      <div className="py-12">
        <AnimatedText />
      </div>

      <div className="bg-black">
        <Gallery />
      </div>
    </div>
  );
};

export default Landing1;
