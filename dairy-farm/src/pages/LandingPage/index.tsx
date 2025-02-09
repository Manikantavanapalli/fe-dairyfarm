import React from "react";
import twoFiftyMl from '../../assets/images/250ml.png';
import fiveHundredMl from '../../assets/images/500ML.png';
import sevenFiftyMl from '../../assets/images/750ML.png';
import oneLitre from '../../assets/images/1Litre.png';
import banner1 from '../../assets/banners/Banner1.png';
import banner2 from '../../assets/banners/Banner2.png';
import banner3 from '../../assets/banners/Banner3.png';

const LandingPage: React.FC = () => {
  return (
    <div className="text-center">
      {/* Banner Section */}
      <div className="bg-success text-white py-5">
        <h1 className="display-4">Welcome to Milk Dairy</h1>
        <p className="lead">Fresh and pure buffalo milk delivered to your home.</p>
        <a href="/subscribe" className="btn btn-light btn-lg">Subscribe Now</a>
      </div>
      {/* Carousel Banner Section */}
      <div id="milkCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {[banner1, banner2, banner3].map((banner, index) => (
            <div
              className={`carousel-item ${index === 0 ? "active" : ""}`}
              key={index}
              data-bs-interval="5000"  // Auto-rotate every 5 seconds
            >
              <img src={banner} className="d-block w-100" alt={`Banner ${index + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#milkCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#milkCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
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
