import React from "react";
import twoFiftyMl from '../../assets/images/250ml.png';
import fiveHundredMl from '../../assets/images/500ML.png';
import sevenFiftyMl from '../../assets/images/750ML.png';
import oneLitre from '../../assets/images/1Litre.png';

const Products: React.FC = () => {
  return (
    <div className="container my-5">
      {/* Page Title */}
      <h2 className="text-center fw-bold mb-3">Our Products</h2>
      <p className="text-center text-muted mb-4">
        Discover our wide range of fresh dairy products.
      </p>

      {/* Products Section */}
      <div className="container my-5">
        <h2 className="mb-4 fw-bold">Our Milk Products</h2>
        <div className="row">
          {[
            { size: "250ml", price: 20, img: twoFiftyMl },
            { size: "500ml", price: 40, img: fiveHundredMl },
            { size: "750ml", price: 60, img: sevenFiftyMl },
            { size: "1 Litre", price: 80, img: oneLitre }
          ].map((product, index) => (
            <div className="col-md-3 mb-4" key={index}>
              <div className="card h-100 shadow border-0">
                <img src={product.img} className="card-img-top p-3" alt={`${product.size} Buffalo Milk`} />
                <div className="card-body">
                  <h5 className="card-title fw-bold">{product.size} Buffalo Milk</h5>
                  <p className="card-text text-muted">Fresh, pure & creamy – Perfect for your family!</p>
                  <p className="text-success fw-bold fs-4">₹{product.price}</p>
                  <a href="/cart" className="btn btn-primary w-100">Add to Cart</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default Products;
