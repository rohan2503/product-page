"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronUp, ChevronDown } from 'lucide-react';

const ImageGallery: React.FC = () => {
  const images = [
    '/images/i1.jpg',
    '/images/i2.jpg',
    '/images/i3.jpg',
    '/images/i4.jpg',
    '/images/front.jpg',
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleImageTap = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const y = e.clientY - rect.top;
    if (y < rect.height / 2) {
      prevImage();
    } else {
      nextImage();
    }
  };

  return (
    <div className="w-full flex flex-col md:flex-row">
      {/* Thumbnails */}
      <div className="w-full md:w-1/6 flex flex-row md:flex-col space-x-2 md:space-x-0 md:space-y-2 mb-4 md:mb-0 md:mr-4">
        {images.map((src, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden cursor-pointer ${
              index === selectedImageIndex ? 'ring-2 ring-blue-400' : 'ring-1 ring-gray-300'
            }`}
            onClick={() => setSelectedImageIndex(index)}
          >
            <Image 
              src={src} 
              width={60} 
              height={60} 
              alt={`Product view ${index + 1}`} 
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Main image */}
      <div className="w-full md:w-5/6">
        <div 
          className="rounded-3xl overflow-hidden shadow-lg max-w-md mx-auto cursor-pointer relative"
          onClick={handleImageTap}
        >
          <Image 
            src={images[selectedImageIndex]} 
            width={400} 
            height={400}        
            alt="Main product view" 
            className="w-full h-auto object-cover"
          />
          {/* Navigation cues */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-2 left-2 bg-black/20 rounded-full p-1">
              <ChevronUp className="text-white" size={20} />
            </div>
            <div className="absolute bottom-2 right-2 bg-black/20 rounded-full p-1">
              <ChevronDown className="text-white" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;