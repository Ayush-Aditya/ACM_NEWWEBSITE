import React from 'react';

const ImageCollage = () => {
  const svgUrl = 'Group 45.svg'; // Replace with your SVG path
  const imageUrls = [
    'Group 16.svg',
    'Group 16.svg',
    'Group 16.svg',
    'Group 16.svg'
  ];

  return (
    <div className="relative w-full h-[300px] bg-black md:h-[500px] lg:h-[700px] flex justify-center items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={svgUrl}
          alt="Collage Background"
          className="object-contain h-full max-w-screen"
        />
      </div>

      {/* Image Container */}
      <div className="relative w-3/5 h-3/5 grid grid-cols-2 grid-rows-4 gap-10 sm:gap-12 md:gap-14">
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className={`relative flex items-center justify-center overflow-hidden rounded-lg aspect-square transition-transform duration-300 ease-in-out hover:scale-110 
              ${index === 0 ? 'row-start-1 col-start-1 w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 -translate-x-20 -translate-y-20' : ''} 
              ${index === 1 ? 'row-start-2 col-start-2 w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 translate-x-6 -translate-y-28' : ''} 
              ${index === 2 ? 'row-start-3 col-start-1 w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 translate-x-3 translate-y-6' : ''} 
              ${index === 3 ? 'row-start-4 col-start-2 w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 -translate-x-2 translate-y-4' : ''}`}
          >
            
            <div className="absolute inset-0 rounded-lg border-2 sm:border-3 md:border-4 border-white opacity-90 shadow-[0_0_30px_10px_rgba(255,255,255,1)] animate-pulse"></div>
            {/* Image */}
            <img
              src={imageUrl}
              alt={`Collage Image ${index + 1}`}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCollage;
