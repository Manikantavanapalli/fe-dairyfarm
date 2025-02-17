import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Import axios

// Define interfaces
interface Product {
  id: number;
  name: string;
  price: string;
  description?: string;
  img: string;
}

interface CartItem {
  id: number;
  productId: number;
  name: string;
  price: number;
  quantity: number;
}

interface CarouselProps {
  products: Product[];
  currentUser: string | null;
}

const Carousel: React.FC<CarouselProps> = ({ products, currentUser }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  // Calculate the number of slides needed (each slide contains 4 products)
  const slides = Math.ceil(products.length / 4);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides - 1 ? 0 : prev + 1));
  };

  // Handle adding a product to the cart and navigating to the cart page
  const handleAddToCart = async (product: Product) => {
    
    try {
      // Get the current user's cart
      const cartResponse = await axios.get(`http://localhost:5000/carts?userId=${currentUser}`);
      let userCart = cartResponse.data[0];

      // Create a new cart if one doesn't exist
      if (!userCart) {
        const newCartResponse = await axios.post("http://localhost:5000/carts", {
          userId: currentUser,
          items: [],
        });
        userCart = newCartResponse.data;
      }

      // Check if the product already exists in the cart
      const existingItem = userCart.items.find((item: CartItem) => item.productId === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        userCart.items.push({
          id: Date.now(), // Unique id for the cart item
          productId: product.id,
          name: product.name,
          price: parseFloat(product.price.replace("₹", "")),
          quantity: 1,
        });
      }

      // Update the cart on the backend
      await axios.put(`http://localhost:5000/carts/${userCart.id}`, userCart);
      alert("Product added to cart!");

      // Navigate to the cart page
      navigate("/cart");
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("An error occurred while adding the product to the cart.");
    }
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {Array.from({ length: slides }).map((_, slideIndex) => (
          <div
            key={slideIndex}
            className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-4"
          >
            {products
              .slice(slideIndex * 4, slideIndex * 4 + 4) // Display 4 products per slide
              .map((product) => (
                <div
                  key={product.id}
                  className="bg-white shadow-lg rounded-xl p-5 text-center hover:shadow-2xl transition-all transform hover:scale-105"
                >
                  <img
                    src={product.img || "https://via.placeholder.com/150"}
                    alt={product.name}
                    className="w-28 mx-auto"
                  />
                  <h5 className="text-2xl font-bold mt-3">{product.name}</h5>
                  <p className="text-gray-500 mt-1">Fresh, pure & creamy</p>
                  <p className="text-green-600 text-xl font-extrabold mt-2">{product.price}</p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-full font-bold hover:bg-blue-600 transition-all"
                  >
                    Add to Cart 🛒
                  </button>
                </div>
              ))}
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-900"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-900"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
};

export default Carousel;
