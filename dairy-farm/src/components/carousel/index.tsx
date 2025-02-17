import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Carousel = ({ products }: { products: any[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate the number of slides needed
  const slides = Math.ceil(products.length / 4);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {/* Split products into groups of 4 */}
        {Array.from({ length: slides }).map((_, slideIndex) => (
          <div
            key={slideIndex}
            className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-4"
          >
            {products
              .slice(slideIndex * 4, slideIndex * 4 + 4) // Get 4 products for the current slide
              .map((product, index) => (
                <div
                  key={index}
                  className="bg-white shadow-lg rounded-xl p-5 text-center hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  <img src={product.img} alt={product.size} className="w-28 mx-auto" />
                  <h5 className="text-2xl font-bold mt-3">{product.size} Buffalo Milk</h5>
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
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;