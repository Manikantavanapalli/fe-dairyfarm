import React from "react";

const Cart: React.FC = () => {
  return (
    <div className="container my-5">
      {/* Page Title */}
      <h2 className="text-center fw-bold mb-4">Your Cart</h2>

      {/* Cart Items */}
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow border-0">
            <div className="card-body">
              {/* Sample Cart Items */}
              {[
                { name: "250ml Buffalo Milk", price: 20, quantity: 1 },
                { name: "500ml Buffalo Milk", price: 40, quantity: 2 },
              ].map((item, index) => (
                <div key={index} className="d-flex justify-content-between align-items-center border-bottom py-3">
                  <div>
                    <h5 className="mb-1">{item.name}</h5>
                    <p className="text-muted mb-0">₹{item.price} x {item.quantity}</p>
                  </div>
                  <div>
                    <button className="btn btn-sm btn-danger me-2">-</button>
                    <span className="fw-bold">{item.quantity}</span>
                    <button className="btn btn-sm btn-success ms-2">+</button>
                  </div>
                </div>
              ))}

              {/* Total Price */}
              <div className="d-flex justify-content-between align-items-center mt-4">
                <h5 className="fw-bold">Total:</h5>
                <h5 className="text-success fw-bold">₹100</h5>
              </div>

              {/* Checkout Button */}
              <div className="text-center mt-3">
                <button className="btn btn-primary w-100 fw-bold">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
