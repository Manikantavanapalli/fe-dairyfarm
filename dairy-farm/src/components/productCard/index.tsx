import React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  price: string;
  description: string;
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  price,
  description,
  onAddToCart,
}) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200 p-4 transition-transform transform hover:scale-105">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-500 text-sm mt-1">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-blue-600">{price}</span>
          <button
            onClick={onAddToCart}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
