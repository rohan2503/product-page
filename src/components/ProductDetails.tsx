import React from 'react';
import { AnimatedAddToBagButton } from './AnimatedAddToBagButton';

const ProductDetails: React.FC = () => {
  return (
    <div className="w-1/3 pl-8">
      <p className="text-sm mb-2 text-gray-600">T-SHIRTS</p>
      <h2 className="text-3xl font-serif mb-2 text-black">Distorted logo T-shirt</h2>
      <p className="text-xl mb-4 text-black">$ 495</p>
      <div className="flex space-x-2 mb-4">
        <span className="w-6 h-6 rounded-full bg-beige border"></span>
        <span className="w-6 h-6 rounded-full bg-navy border"></span>
        <span className="w-6 h-6 rounded-full bg-black border-2 border-blue-500"></span>
        <span className="w-6 h-6 rounded-full bg-white border"></span>
      </div>
      <p className="mb-2 text-black">Washed Black</p>
      <p className="text-sm underline mb-4 text-black">Size Guide</p>
      
      {/* Size Dropdown */}
      <select className="relative w-full bg-white text-black p-[10px] rounded-md outline outline-1 outline-black mb-2 cursor-pointer">
        <option value="" disabled selected>Select Size</option>
        <option value="S">S</option>
        <option value="M">M</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
      </select>

      {/* Animated Add to Bag Button */}
      <AnimatedAddToBagButton initialText="Add to Bag" addedText="Added to Bag" />

      {/* Pick-up Button */}
      <button className="relative flex w-full items-center justify-center overflow-hidden rounded-md bg-white text-black p-[10px] outline outline-1 outline-black mt-2">
        <span className="relative block h-full w-full font-semibold">Pick-up in Boutique</span>
      </button>

      <p className="text-sm mb-4 text-gray-600">
        Regular-fit, crew-neck T-shirt in Makò jersey with the Maison Margiela distorted logo.
      </p>
      <p className="text-sm underline mb-2 text-black">Product Details</p>
      <p className="text-sm underline text-black">Shipping and Returns</p>
    </div>
  );
};

export default ProductDetails;