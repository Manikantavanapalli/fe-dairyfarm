import React, { useEffect, useState } from "react";
import axios from "axios";
import BulkOrderForm from "../../components/BulkOrderForm";

interface Product {
  id: number;
  name: string;
}

const BulkOrdersPage: React.FC = () => {
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

  const handleBulkOrderSubmit = async (order: {
    name: string;
    email: string;
    phone: string;
    products: { id: number; name: string; quantity: number }[];
    notes: string;
  }) => {
    try {
      // Send the bulk order to the server
      await axios.post("http://localhost:5000/bulk-orders", order);
      alert("Bulk order submitted successfully!");
    } catch (error) {
      console.error("Error submitting bulk order:", error);
      alert("Failed to submit bulk order. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">Bulk Orders</h1>
        <p className="text-lg text-gray-600 text-center mb-12">
          Place your bulk orders here. We'll get back to you shortly with a confirmation.
        </p>
        <BulkOrderForm onSubmit={handleBulkOrderSubmit} products={products} />
      </div>
    </div>
  );
};

export default BulkOrdersPage;