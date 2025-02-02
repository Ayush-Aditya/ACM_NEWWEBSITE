'use client'
import { useState, useMemo } from "react";

const members = [
  { name: "Raj Aryan", designation: "President" },
  { name: "Saquib", designation: "Vice President" },
  { name: "Akshit", designation: "Secretary" },
  { name: "Mansi", designation: "Treasurer" }
];

const MemberContent = ({ member }) => (
  <div className="transform transition-all duration-300 hover:scale-105">
    <h2 className='text-black font-extrabold text-2xl'>{member.name}</h2>
    <p className='text-black font-extrabold text-lg opacity-80'>{member.designation}</p>
  </div>
);

export default function StaticMembers() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('');

  const currentMember = useMemo(() => members[activeIndex], [activeIndex]);

  const changeMember = (direction) => {
    if (direction === "left" && activeIndex > 0) {
      setSlideDirection('slide-left');
      setActiveIndex(activeIndex - 1);
    } else if (direction === "right" && activeIndex < members.length - 1) {
      setSlideDirection('slide-right');
      setActiveIndex(activeIndex + 1);
    }
    setTimeout(() => setSlideDirection(''), 500);
  };

  return (
    <div className="relative flex justify-center items-center mt-36 mb-12 group">
      <img
        src="/arrow.png"
        className={`h-4 lg:h-12 cursor-pointer hover:-translate-x-4 ${activeIndex === 0 ? 'opacity-50' : 'hover:scale-110'} transition-all duration-300`}
        onClick={() => changeMember("left")}
      />
      <div className="flex flex-col w-[80px] md:w-[120px] lg:w-[300px] 2xl:w-[374px] transition-all duration-300 hover:bg-[#1a1a1a]">
        <div className="h-[120px] md:h-[160px] lg:h-[260px] 2xl:h-[389px] border-t border-b border-l border-[#C1C1C1] bg-[#0D0D0D]"></div>
      </div>
      <div className={`flex flex-col w-[240px] md:w-[300px] lg:w-[517px] 2xl:w-[517px] transform transition-all duration-500 ${
        slideDirection === 'slide-left' ? '-translate-x-4 opacity-0' : 
        slideDirection === 'slide-right' ? 'translate-x-4 opacity-0' : 'translate-x-0 opacity-100'
      }`}>
        <div className='h-[280px] md:h-[300px] lg:h-[400px] 2xl:h-[497px] border border-[#C1C1C1] bg-[#0D0D0D] group-hover:border-[#31D7B9] transition-colors duration-300' />
        <div className="bg-white flex justify-between px-8 py-2 mt-2 hover:bg-gray-100 transition-colors duration-300">
          <MemberContent key={activeIndex} member={currentMember} />
        </div>
      </div>
      <div className="flex flex-col w-[80px] md:w-[120px] lg:w-[300px] 2xl:w-[374px] transition-all duration-300 hover:bg-[#1a1a1a]">
        <div className="h-[120px] md:h-[160px] lg:h-[260px] 2xl:h-[389px] border-t border-b border-r border-[#C1C1C1] bg-[#0D0D0D]"></div>
      </div>
      <img
        src="/arrow.png"
        className={`h-4 lg:h-12 cursor-pointer scale-x-[-1] hover:translate-x-4 ${activeIndex === members.length - 1 ? 'opacity-50' : 'hover:scale-110'} transition-all duration-300`}
        onClick={() => changeMember("right")}
      />
    </div>
  );
}
