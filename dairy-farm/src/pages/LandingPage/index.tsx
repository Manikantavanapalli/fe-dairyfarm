import React, { useState, useEffect } from "react";
import twoFiftyMl from '../../assets/images/250ml.png';
import fiveHundredMl from '../../assets/images/500ML.png';
import sevenFiftyMl from '../../assets/images/750ML.png';
import oneLitre from '../../assets/images/1Litre.png';
import banner1 from '../../assets/banners/Banner1.png';
import banner2 from '../../assets/banners/Banner2.png';
import banner3 from '../../assets/banners/Banner3.png';

const LandingPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const banners = [banner1, banner2, banner3];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-12">
        <h1 className="text-4xl font-bold">Welcome to Milk Dairy</h1>
        <p className="text-lg mt-2">Fresh and pure buffalo milk delivered to your home.</p>
        <a href="/subscribe" className="mt-4 inline-block bg-white text-green-600 px-6 py-2 text-lg font-bold rounded-md shadow-md hover:bg-gray-200">Subscribe Now</a>
      </div>
      
      {/* Carousel Section */}
      <div className="relative w-full max-w-7xl mx-auto mt-8">
        <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[500px] rounded-lg overflow-hidden shadow-lg">
          {banners.map((banner, index) => (
            <img
              key={index}
              src={banner}
              alt={`Banner ${index + 1}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                index === currentIndex ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length)}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200"
        >
          ❮
        </button>
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-200"
        >
          ❯
        </button>
      </div>

      {/* Products Section */}
      <div className="container mx-auto my-10">
        <h2 className="text-3xl font-bold mb-6">Our Milk Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { size: "250ml", price: 20, img: twoFiftyMl },
            { size: "500ml", price: 40, img: fiveHundredMl },
            { size: "750ml", price: 60, img: sevenFiftyMl },
            { size: "1 Litre", price: 80, img: oneLitre }
          ].map((product, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden p-4 text-center">
              <img src={product.img} alt={product.size} className="w-24 mx-auto" />
              <h5 className="text-xl font-bold mt-2">{product.size} Buffalo Milk</h5>
              <p className="text-gray-500">Fresh, pure & creamy</p>
              <p className="text-green-600 text-lg font-bold">₹{product.price}</p>
              <a href="/cart" className="block mt-3 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">Add to Cart</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
