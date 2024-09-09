"use client"; // Add this line

import React, { useState } from 'react';
import ColorButton from './ColorButton';
import { AnimatedAddToBagButton } from './AnimatedAddToBagButton';

const ProductDetails: React.FC = () => {
  const [selectedColor, setSelectedColor] = useState<string>('washed-black');
  const [selectedSize, setSelectedSize] = useState<string>(''); // State for selected size

  const colors = ['washed-black', 'ecru', 'blue']; // Define your color options

  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSize(event.target.value); // Update selected size
  };

  return (
    <div className="w-1/3 pl-8 text-sm">
      <p className="text-sm mb-2 text-gray-600">T-SHIRTS</p>
      <h2 className="text-3xl font-serif mb-2 text-black">Distorted logo T-shirt</h2>
      <p className="text-xl mb-4 text-black">$ 495</p>
      
      {/* Color Selection Section */}
      <div className="mb-4 flex items-center"> {/* Use flex to align items */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
          {colors.map((color) => (
            <ColorButton
              key={color}
              color={color} // Pass the color directly
              onClick={handleColorChange}
              isSelected={selectedColor === color}
            />
          ))}
        </div>
      </div>

      <p className="text-black mb-4">Selected Color: {selectedColor}</p> {/* Add margin-bottom for spacing */}
      
      {/* Size Dropdown */}
      <select
        className="relative w-full bg-white text-black p-[10px] rounded-md outline outline-1 outline-black mb-4 cursor-pointer"
        value={selectedSize} // Set the value prop
        onChange={handleSizeChange} // Handle size change
      >
        <option value="" disabled>Select Size</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>

      {/* Animated Add to Bag Button */}
      <AnimatedAddToBagButton initialText="Add to Bag" addedText="Added to Bag" /> {/* Removed className */}

      {/* Pick-up Button */}
      <button className="relative flex w-full items-center justify-center overflow-hidden rounded-md bg-white text-black p-[10px] outline outline-1 outline-black mb-4 mt-2"> {/* Add margin-top for spacing */}
        <span className="relative block h-full w-full font-semibold">Pick-up in Boutique</span>
      </button>

      {/* Existing Product Description */}
      <p className="text-sm mb-4 text-gray-600">
        Regular-fit, crew-neck T-shirt in Makò jersey with the Maison Margiela distorted logo.
      </p>
      <p className="text-sm underline mb-2 text-black">Product Details</p>
      <p className="text-sm underline text-black">Shipping and Returns</p>
    </div>
  );
};

export default ProductDetails;