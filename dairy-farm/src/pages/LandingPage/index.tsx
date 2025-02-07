import React from "react";
import twoFiftyMl from '../../assets/images/250ml.png';
import fiveHundredMl from '../../assets/images/500ML.png';
import sevenFiftyMl from '../../assets/images/750ML.png';
import oneLitre from '../../assets/images/1Litre.png';

const LandingPage: React.FC = () => {
  return (
    <div className="text-center">
      {/* Banner Section */}
      <div className="bg-success text-white py-5">
        <h1 className="display-4">Welcome to Milk Dairy</h1>
        <p className="lead">Fresh and pure buffalo milk delivered to your home.</p>
        <a href="/subscribe" className="btn btn-light btn-lg">Subscribe Now</a>
      </div>

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

      {/* Subscription Plans Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4 fw-bold">Choose Your Subscription Plan</h2>
        <div className="row">
          {[
            { name: "Weekly Plan", price: 140, duration: "7 Days", savings: "Save ₹0" },
            { name: "Monthly Plan", price: 550, duration: "30 Days", savings: "Save ₹50" },
            { name: "3 Months Plan", price: 1600, duration: "90 Days", savings: "Save ₹200" },
            { name: "6 Months Plan", price: 3100, duration: "180 Days", savings: "Save ₹500" },
            { name: "1 Year Plan", price: 6000, duration: "365 Days", savings: "Save ₹1000" }
          ].map((plan, index) => (
            <div className="col-md-4 mb-4" key={index}>
              <div className="card shadow-sm border-0 h-100 text-center">
                <div className="card-body">
                  <h5 className="card-title fw-bold">{plan.name}</h5>
                  <p className="card-text text-muted">{plan.duration}</p>
                  <p className="text-success fw-bold fs-4">₹{plan.price}</p>
                  <p className="text-danger fw-bold">{plan.savings}</p>
                  <a href="/subscribe" className="btn btn-success w-100">Subscribe Now</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-light py-5">
        <h2 className="fw-bold">Why Choose Us?</h2>
        <p className="lead">We deliver the freshest buffalo milk straight from our farm to your doorstep.</p>
        <a href="/subscribe" className="btn btn-success btn-lg px-4 py-2 rounded-pill shadow-sm">Subscribe Now</a>
      </div>
    </div>
  );
};

export default LandingPage;
