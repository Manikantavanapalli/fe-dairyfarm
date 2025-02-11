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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-500 to-green-600 text-white py-16 px-6 rounded-b-3xl shadow-lg">
        <h1 className="text-5xl font-extrabold tracking-wide">Welcome to Milk Dairy 🥛</h1>
        <p className="text-lg mt-3 opacity-90">
          Fresh and pure buffalo milk delivered straight to your home.
        </p>
        <a
          href="/subscribe"
          className="mt-6 inline-block bg-white text-green-600 px-8 py-3 text-lg font-bold rounded-full shadow-lg hover:bg-gray-100 transition-all"
        >
          Subscribe Now
        </a>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full max-w-6xl mx-auto mt-10 rounded-xl overflow-hidden shadow-xl">
        <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[500px]">
          {banners.map((banner, index) => (
            <img
              key={index}
              src={banner}
              alt={`Banner ${index + 1}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 rounded-xl shadow-lg ${
                index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length)}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-all"
        >
          ❮
        </button>
        <button
          onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length)}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-all"
        >
          ❯
        </button>
      </div>

      {/* Products Section */}
      <div className="container mx-auto my-12 px-6">
        <h2 className="text-4xl font-extrabold text-gray-800">Our Milk Products 🥛</h2>
        <p className="text-gray-600 text-lg mt-2">High-quality fresh milk in various sizes.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
          {[
            { size: "250ml", price: 20, img: twoFiftyMl },
            { size: "500ml", price: 40, img: fiveHundredMl },
            { size: "750ml", price: 60, img: sevenFiftyMl },
            { size: "1 Litre", price: 80, img: oneLitre }
          ].map((product, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-xl overflow-hidden p-5 text-center hover:shadow-2xl transition-all transform hover:scale-105"
            >
              <img src={product.img} alt={product.size} className="w-28 mx-auto" />
              <h5 className="text-2xl font-bold mt-3 text-gray-800">{product.size} Buffalo Milk</h5>
              <p className="text-gray-500 mt-1">Fresh, pure & creamy</p>
              <p className="text-green-600 text-xl font-extrabold mt-2">₹{product.price}</p>
              <a
                href="/cart"
                className="block mt-4 bg-blue-500 text-white py-2 px-6 rounded-full font-bold hover:bg-blue-600 transition-all"
              >
                Add to Cart 🛒
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
