import React from "react";
import { useNavigate } from "react-router-dom";
import twoFiftyMl from "../../assets/images/250ml.png";
import fiveHundredMl from "../../assets/images/500ML.png";
import sevenFiftyMl from "../../assets/images/750ML.png";
import oneLitre from "../../assets/images/1Litre.png";

const products = [
  { id: 1, size: "250ml", price: 20, img: twoFiftyMl },
  { id: 2, size: "500ml", price: 40, img: fiveHundredMl },
  { id: 3, size: "750ml", price: 60, img: sevenFiftyMl },
  { id: 4, size: "1 Litre", price: 80, img: oneLitre },
];

const Products: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      {/* Page Title */}
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Products</h2>
        <p className="text-gray-500 mt-2">Discover our wide range of fresh dairy products.</p>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="cursor-pointer bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300"
          >
            <img src={product.img} alt={`${product.size} Buffalo Milk`} className="w-full h-52 object-contain p-4" />
            <div className="p-4">
              <h5 className="text-lg font-semibold text-gray-700">{product.size} Buffalo Milk</h5>
              <p className="text-gray-500 text-sm">Fresh, pure & creamy – Perfect for your family!</p>
              <p className="text-green-600 font-bold text-xl mt-2">₹{product.price}</p>
              <button className="w-full bg-blue-600 text-white py-2 rounded-md mt-3 hover:bg-blue-700 transition">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
