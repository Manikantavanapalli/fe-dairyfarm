import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/productCard";
import axios from "axios";

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  img: string;
}

interface ProductsProps {
  currentUser: string | null;
}

const Products: React.FC<ProductsProps> = ({ currentUser }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>("http://localhost:5000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddToCart = async (product: Product) => {
    if (!currentUser) {
      alert("Please log in to add items to the cart.");
      return;
    }

    try {
      // Fetch the user's cart
      const cartResponse = await axios.get(`http://localhost:5000/carts?userId=${currentUser}`);
      let userCart = cartResponse.data[0];

      // If the user doesn't have a cart, create one
      if (!userCart) {
        const newCartResponse = await axios.post("http://localhost:5000/carts", {
          userId: currentUser,
          items: [],
        });
        userCart = newCartResponse.data;
      }

      // Check if the item already exists in the cart
      const existingItem = userCart.items.find((item: any) => item.productId === product.id);

      if (existingItem) {
        // Update the quantity if the item exists
        await axios.put(`http://localhost:5000/carts/${userCart.id}`, {
          ...userCart,
          items: userCart.items.map((item: any) =>
            item.productId === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        });
      } else {
        // Add the item if it doesn't exist
        await axios.put(`http://localhost:5000/carts/${userCart.id}`, {
          ...userCart,
          items: [
            ...userCart.items,
            {
              id: Date.now(),
              productId: product.id,
              name: product.name,
              price: parseFloat(product.price.replace("₹", "")),
              quantity: 1,
            },
          ],
        });
      }

      alert(`${product.name} added to cart!`);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Products</h2>
        <p className="text-gray-500 mt-2">Discover our wide range of fresh dairy products.</p>
      </div>

      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            image={product.img}
            title={`${product.name}`}
            price={product.price}
            description={product.description}
            onAddToCart={() => handleAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;