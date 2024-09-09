import React from 'react';
import ImageGallery from './ImageGallery';
import ProductDetails from './ProductDetails';

const ProductPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8 flex">
      <ImageGallery />
      <ProductDetails />
    </div>
  );
};

export default ProductPage;