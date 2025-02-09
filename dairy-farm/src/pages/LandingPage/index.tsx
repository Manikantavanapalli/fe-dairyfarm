import React from "react";
import twoFiftyMl from '../../assets/images/250ml.png';
import fiveHundredMl from '../../assets/images/500ML.png';
import sevenFiftyMl from '../../assets/images/750ML.png';
import oneLitre from '../../assets/images/1Litre.png';
import banner1 from '../../assets/banners/Banner1.png';
import banner2 from '../../assets/banners/Banner2.png';
import banner3 from '../../assets/banners/Banner3.png';

const LandingPage: React.FC = () => {
  return (
    <div className="text-center">
      {/* Hero Section */}
      <div className="bg-green-600 text-white py-12">
        <h1 className="text-4xl font-bold">Welcome to Milk Dairy</h1>
        <p className="text-lg mt-2">Fresh and pure buffalo milk delivered to your home.</p>
        <a href="/subscribe" className="mt-4 inline-block bg-white text-green-600 px-6 py-2 text-lg font-bold rounded-md shadow-md hover:bg-gray-200">Subscribe Now</a>
      </div>
      
      {/* Carousel Section */}
      <div className="w-full overflow-hidden mt-8">
        <div className="flex transition-transform duration-500 ease-in-out">
          {[banner1, banner2, banner3].map((banner, index) => (
            <img key={index} src={banner} alt={`Banner ${index + 1}`} className="w-full" />
          ))}
        </div>
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
      
      {/* Subscription Plans Section */}
      <div className="container mx-auto my-10">
        <h2 className="text-3xl font-bold text-center mb-6">Choose Your Subscription Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { name: "Weekly Plan", price: 140, duration: "7 Days", savings: "Save ₹0" },
            { name: "Monthly Plan", price: 550, duration: "30 Days", savings: "Save ₹50" },
            { name: "3 Months Plan", price: 1600, duration: "90 Days", savings: "Save ₹200" },
            { name: "6 Months Plan", price: 3100, duration: "180 Days", savings: "Save ₹500" },
            { name: "1 Year Plan", price: 6000, duration: "365 Days", savings: "Save ₹1000" }
          ].map((plan, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center border border-gray-200">
              <h5 className="text-xl font-bold">{plan.name}</h5>
              <p className="text-gray-500">{plan.duration}</p>
              <p className="text-green-600 text-lg font-bold">₹{plan.price}</p>
              <p className="text-red-500 font-semibold">{plan.savings}</p>
              <a href="/subscribe" className="block mt-3 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Subscribe Now</a>
            </div>
          ))}
        </div>
      </div>
      
      {/* Why Choose Us Section */}
      <div className="bg-gray-100 py-12 text-center">
        <h2 className="text-3xl font-bold">Why Choose Us?</h2>
        <p className="text-lg mt-2">We deliver the freshest buffalo milk straight from our farm to your doorstep.</p>
        <a href="/subscribe" className="mt-4 inline-block bg-green-500 text-white px-6 py-2 text-lg font-bold rounded-md shadow-md hover:bg-green-600">Subscribe Now</a>
      </div>
    </div>
  );
};

export default LandingPage;
