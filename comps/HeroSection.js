import { useState, useEffect } from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/teemvid_.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};


export default HeroSection;

