"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const ImageGallery: React.FC = () => {
  const images = [
    '/images/i1.jpg',
    '/images/i2.jpg',
    '/images/i3.jpg',
    '/images/i4.jpg',
    '/images/front.jpg',
  ];

  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="w-full flex">
      {/* Thumbnails on the left */}
      <div className="w-1/6 flex flex-col space-y-2 mr-4">
        {images.map((src, index) => (
          <div
            key={index}
            className={`rounded-lg overflow-hidden cursor-pointer ${
              selectedImage === src ? 'ring-2 ring-blue-400' : 'ring-1 ring-gray-300'
            }`}
            onClick={() => setSelectedImage(src)}
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
      <div className="w-5/6">
        <div className="rounded-3xl overflow-hidden shadow-lg max-w-md mx-auto">
            <Image 
                src={selectedImage} 
                width={400} 
                height={400}        
                alt="Main product view" 
                className="w-full h-auto object-cover"
            />
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;