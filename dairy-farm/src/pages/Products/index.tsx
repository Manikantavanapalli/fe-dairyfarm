import React from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/productCard";
import twoFiftyMl from "../../assets/images/250ml.png";
import fiveHundredMl from "../../assets/images/500ML.png";
import sevenFiftyMl from "../../assets/images/750ML.png";
import oneLitre from "../../assets/images/1Litre.png";

const products = [
  { id: 1, size: "250ml", price: "₹20", img: twoFiftyMl, description: "Fresh, pure & creamy" },
  { id: 2, size: "500ml", price: "₹40", img: fiveHundredMl, description: "High-quality fresh milk" },
  { id: 3, size: "750ml", price: "₹60", img: sevenFiftyMl, description: "Perfect for daily use" },
  { id: 4, size: "1 Litre", price: "₹80", img: oneLitre, description: "Farm-fresh goodness" },
];

const Products: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Products</h2>
        <p className="text-gray-500 mt-2">Discover our wide range of fresh dairy products.</p>
      </div>

      {/* Product Grid */}
      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.img}
            title={`${product.size} Buffalo Milk`}
            price={product.price}
            description={product.description}
            onAddToCart={() => console.log(`Added ${product.size} to cart`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
