import React from "react";

const ProductDetail: React.FC = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Product Image */}
        <div className="col-md-6 text-center">
          <img
            src="https://via.placeholder.com/400"
            alt="Product"
            className="img-fluid rounded shadow"
          />
        </div>

        {/* Product Details */}
        <div className="col-md-6">
          <h2 className="fw-bold">Buffalo Milk - 1 Litre</h2>
          <p className="text-muted">Pure, fresh, and creamy buffalo milk delivered to your doorstep.</p>
          <h4 className="text-success fw-bold">₹80</h4>

          {/* Quantity Selector */}
          <div className="my-3 d-flex align-items-center">
            <label className="me-2 fw-bold">Quantity:</label>
            <button className="btn btn-outline-secondary btn-sm me-2">-</button>
            <span className="fw-bold">1</span>
            <button className="btn btn-outline-secondary btn-sm ms-2">+</button>
          </div>

          {/* Buttons */}
          <div className="d-flex gap-3">
            <button className="btn btn-primary w-50 fw-bold">Add to Cart</button>
            <button className="btn btn-success w-50 fw-bold">Buy Now</button>
          </div>
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-5">
        <h3 className="fw-bold">Customer Reviews</h3>

        {[1, 2, 3].map((_, index) => (
          <div key={index} className="border p-3 rounded my-3 shadow-sm">
            <h5 className="fw-bold">John Doe</h5>
            <p className="text-muted mb-1">⭐⭐⭐⭐☆</p>
            <p className="mb-0">"Excellent quality milk. Tastes fresh and pure!"</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
