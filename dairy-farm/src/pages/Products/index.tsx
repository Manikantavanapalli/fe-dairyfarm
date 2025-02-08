import React from "react";

const Products: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      {/* Page Title */}
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
        Our Products
      </h2>
      <p className="text-lg text-center text-gray-600 mb-8">
        Discover our wide range of fresh dairy products.
      </p>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[
          { name: "250ml Buffalo Milk", price: 20 },
          { name: "500ml Buffalo Milk", price: 40 },
          { name: "750ml Buffalo Milk", price: 60 },
          { name: "1 Litre Buffalo Milk", price: 80 },
        ].map((product, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-gray-700">{product.name}</h3>
            <p className="text-lg text-green-600 font-bold">₹{product.price}</p>
            <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;