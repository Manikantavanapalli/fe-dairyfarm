import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import twoFiftyMl from "../../assets/images/250ml.png";
import fiveHundredMl from "../../assets/images/500ML.png";
import sevenFiftyMl from "../../assets/images/750ML.png";
import oneLitre from "../../assets/images/1Litre.png";
import ProductCard from "../../components/productCard";

const products = [
  { id: 1, size: "250ml", price: "₹20", img: twoFiftyMl },
  { id: 2, size: "500ml", price: "₹40", img: fiveHundredMl },
  { id: 3, size: "750ml", price: "₹60", img: sevenFiftyMl },
  { id: 4, size: "1 Litre", price: "₹80", img: oneLitre },
];

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="text-center text-red-600 font-bold">Product not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      {/* Product Details Section */}
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <img src={product.img} alt={product.size} className="w-full h-64 object-contain" />
        <h2 className="text-3xl font-bold mt-4">{product.size} Buffalo Milk</h2>
        <p className="text-gray-600 mt-2">Pure, fresh, and creamy buffalo milk delivered to your doorstep.</p>
        <p className="text-green-600 font-bold text-2xl mt-2">{product.price}</p>
        <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg font-bold hover:bg-blue-700 transition-all">
          Add to Cart 🛒
        </button>
      </div>

      {/* Similar Products Section */}
      <div className="max-w-6xl mx-auto mt-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">Similar Products</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products
            .filter((p) => p.id !== product.id)
            .map((similarProduct) => (
              <ProductCard
                key={similarProduct.id}
                image={similarProduct.img}
                title={similarProduct.size + " Buffalo Milk"}
                price={similarProduct.price}
                description="Fresh, pure & creamy"
                onAddToCart={() => console.log("Added to cart")}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
