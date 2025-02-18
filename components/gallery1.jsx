import React from 'react';

const Gallery = () => {
  return (
    <div className="bg-black py-12 px-6 md:px-12 lg:px-24">
       <h2 className="text-white text-3xl font-bold mb-8 text-center">Gallery</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Image 1 (Tall - spans 2 rows) */}
        <div className="md:col-span-1 lg:col-span-2 relative h-48 md:h-64 lg:h-96"> {/* Fixed height */}
          <img
            src="Top-8-Coding-Platforms-for-Data-Science-Beginner-01-2048x1151.svg"
            alt="Gallery Image 1"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
        </div>

        {/* Image 2 (Small) */}
        <div className="relative h-48 md:h-64 lg:h-96"> {/* Fixed height */}
          <img
            src="Top-8-Coding-Platforms-for-Data-Science-Beginner-01-2048x1151.svg"
            alt="Gallery Image 2"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
        </div>

        {/* Image 3 (Medium - spans 2 columns) */}
        <div className="relative md:col-span-1 lg:col-span-2 h-48 md:h-64 lg:h-96"> {/* Fixed height */}
          <img
            src="Top-8-Coding-Platforms-for-Data-Science-Beginner-01-2048x1151.svg"
            alt="Gallery Image 3"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
        </div>

        {/* Image 4 (Small) */}
        <div className="relative h-48 md:h-64 lg:h-96"> {/* Fixed height */}
          <img
            src="Top-8-Coding-Platforms-for-Data-Science-Beginner-01-2048x1151.svg"
            alt="Gallery Image 4"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition duration-300"></div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;