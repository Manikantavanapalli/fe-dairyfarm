import React, { useState, useEffect } from "react";
import axios from "axios";
import banner1 from "../../assets/banners/Banner1.png";
import banner2 from "../../assets/banners/Banner2.png";
import banner3 from "../../assets/banners/Banner3.png";
import Carousel from "../../components/carousel"; // Import the Carousel component

const LandingPage: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState<any[]>([]); // State to store products
  const banners = [banner1, banner2, banner3];

  // Fetch products from the API
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

  // Carousel auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 text-gray-800">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-500 text-white py-20 px-6 text-center rounded-b-3xl shadow-lg">
        <h1 className="text-5xl font-extrabold">Welcome to Milk Dairy 🥛</h1>
        <p className="text-lg mt-4 opacity-90">
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
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 rounded-xl shadow-lg ${index === currentIndex ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="container mx-auto my-12 px-6 text-center">
        <h2 className="text-4xl font-extrabold">Our Milk Products 🥛</h2>
        <p className="text-gray-600 text-lg mt-2">High-quality fresh milk in various sizes.</p>

        {/* Display products dynamically */}
        {products.length > 0 ? (
          <Carousel products={products} /> // Always use Carousel for products
        ) : (
          <p className="text-gray-500 mt-8">Loading products...</p>
        )}
      </div>

      {/* Why Choose Us Section */}
      <div className="bg-green-100 py-16 px-6 text-center rounded-3xl mx-4 shadow-lg">
        <h2 className="text-4xl font-extrabold text-green-700">Why Choose Us? 🌱</h2>
        <p className="text-gray-600 text-lg mt-2 max-w-2xl mx-auto">
          We ensure fresh and high-quality milk with organic farming practices.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {[
            { title: "100% Pure", desc: "No preservatives, no additives." },
            { title: "Organic Farming", desc: "We follow ethical dairy farming methods." },
            { title: "Daily Fresh Delivery", desc: "Milk delivered straight from farm to your home." },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-bold text-green-600">{feature.title}</h3>
              <p className="text-gray-500 mt-2">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 px-6 text-center mx-4">
        <h2 className="text-4xl font-extrabold text-gray-800">Customer Testimonials 💬</h2>
        <p className="text-gray-600 text-lg mt-2">What our customers say about us.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {[
            { name: "Ravi Kumar", review: "The best milk I have ever tasted!" },
            { name: "Sneha Reddy", review: "Pure, fresh, and delivered on time." },
            { name: "Amit Sharma", review: "Highly recommend their service!" },
          ].map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition-all"
            >
              <p className="text-lg italic">"{testimonial.review}"</p>
              <h4 className="text-xl font-bold mt-4 text-green-600">- {testimonial.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;