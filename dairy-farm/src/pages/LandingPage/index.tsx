import React, { useState, useEffect } from "react";
import axios from "axios";
import banner1 from "../../assets/banners/Banner1.png";
import banner2 from "../../assets/banners/Banner2.png";
import banner3 from "../../assets/banners/Banner3.png";
import { FaCheckCircle, FaStar, FaQuoteLeft } from "react-icons/fa";
import Carousel from "../../components/carousel"; // Import the Carousel component

const LandingPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState<any[]>([]);
  const banners = [banner1, banner2, banner3];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 text-gray-900">
      {/* Hero Section */}
      <div className="relative text-center py-20 px-6 bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg rounded-b-3xl">
        <h1 className="text-5xl font-extrabold">🥛 Fresh & Pure Dairy Products</h1>
        <p className="text-lg mt-4 opacity-90">Experience the goodness of organic farm milk at your doorstep.</p>
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
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 rounded-xl shadow-lg ${index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto my-12 px-6 text-center">
        <h2 className="text-4xl font-extrabold">🛒 Our Dairy Products</h2>
        <p className="text-gray-600 text-lg mt-2">High-quality fresh milk and dairy products for your family.</p>

        {products.length > 0 ? (
          <Carousel products={products} />
        ) : (
          <p className="text-gray-500 mt-8">Loading products...</p>
        )}
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-green-100 py-16 px-6 text-center rounded-3xl mx-4 shadow-lg">
        <h2 className="text-4xl font-extrabold text-green-700">🌱 Why Choose Us?</h2>
        <p className="text-gray-600 text-lg mt-2 max-w-2xl mx-auto">
          We guarantee fresh and high-quality dairy products straight from the farm.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {[
            { title: "100% Pure", desc: "No preservatives, no additives.", icon: <FaCheckCircle className="text-green-600 text-4xl mb-3" /> },
            { title: "Organic Farming", desc: "We follow ethical dairy farming methods.", icon: <FaCheckCircle className="text-green-600 text-4xl mb-3" /> },
            { title: "Daily Fresh Delivery", desc: "Milk delivered straight from farm to your home.", icon: <FaCheckCircle className="text-green-600 text-4xl mb-3" /> },
          ].map((feature, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all">
              {feature.icon}
              <h3 className="text-2xl font-bold text-green-600">{feature.title}</h3>
              <p className="text-gray-500 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 px-6 text-center mx-4">
        <h2 className="text-4xl font-extrabold text-gray-800">💬 Customer Testimonials</h2>
        <p className="text-gray-600 text-lg mt-2">See what our happy customers have to say.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {[
            { name: "Ravi Kumar", review: "The best milk I have ever tasted!" },
            { name: "Sneha Reddy", review: "Pure, fresh, and delivered on time." },
            { name: "Amit Sharma", review: "Highly recommend their service!" },
          ].map((testimonial, index) => (
            <div key={index} className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all relative">
              <FaQuoteLeft className="absolute text-gray-300 text-4xl top-4 left-4" />
              <p className="text-lg italic">{testimonial.review}</p>
              <h4 className="text-xl font-bold mt-4 text-green-600">- {testimonial.name}</h4>
              <div className="flex justify-center mt-3">
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
                <FaStar className="text-yellow-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
