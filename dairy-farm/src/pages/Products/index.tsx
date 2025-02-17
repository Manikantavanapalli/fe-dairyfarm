import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/productCard";
import axios from "axios";
import SearchBar from "../../components/SearchBar";
import Pagination from "../../components/pagination";

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  img: string;
}

interface CartItem {
  id: number;
  productId: number;
  name: string;
  price: number;
  quantity: number;
}

interface ProductsProps {
  currentUser: string | null;
}

const Products: React.FC<ProductsProps> = ({ currentUser }) => {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const productsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get<Product[]>("http://localhost:5000/products");
        setProducts(response.data);
        setFilteredProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handleAddToCart = async (product: Product) => {
    if (!currentUser) {
      alert("Please log in to add items to the cart.");
      return;
    }

    try {
      const cartResponse = await axios.get(`http://localhost:5000/carts?userId=${currentUser}`);
      let userCart = cartResponse.data[0];

      if (!userCart) {
        const newCartResponse = await axios.post("http://localhost:5000/carts", {
          userId: currentUser,
          items: [],
        });
        userCart = newCartResponse.data;
      }

      const existingItem = userCart.items.find((item: CartItem) => item.productId === product.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        userCart.items.push({
          id: Date.now(),
          productId: product.id,
          name: product.name,
          price: parseFloat(product.price.replace("₹", "")),
          quantity: 1,
        });
      }

      await axios.put(`http://localhost:5000/carts/${userCart.id}`, userCart);

      alert("Product added to cart!");
    } catch (error) {
      console.error("Error adding product to cart:", error);
      alert("An error occurred while adding the product to the cart.");
    }
  };

  return (
    <div className="min-h-screen bg-white py-12 px-6">
      <div className="text-center">
        <h2 className="text-4xl font-extrabold text-gray-800">Our Products</h2>
        <div className="border-b-4 border-gray-300 w-24 mx-auto mt-2"></div>
        <p className="text-gray-600 mt-3 text-lg">
          Discover our wide range of fresh dairy products.
        </p>
      </div>

      <SearchBar onSearch={handleSearch} />

      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {currentProducts.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-xl p-5 hover:scale-105 transition-all">
            <ProductCard
              image={product.img || "https://via.placeholder.com/150"}
              title={product.name}
              price={product.price}
              description={product.description}
              onAddToCart={() => handleAddToCart(product)}
            />
          </div>
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(filteredProducts.length / productsPerPage)}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Products;