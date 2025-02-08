import React, { useState } from "react";

const Subscribe: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);

  const handleSubscribe = (plan: string) => {
    setSelectedPlan(plan);
    alert(`You have subscribed to the ${plan} plan!`);
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Choose Your Subscription Plan</h2>

      <div className="row">
        {/* Weekly Plan */}
        <div className="col-md-4 mb-3">
          <div className="card shadow h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">Weekly Plan</h5>
              <p className="card-text">Enjoy fresh milk delivered every day for a week.</p>
              <p className="fw-bold text-success">₹140</p>
              <button className="btn btn-primary" onClick={() => handleSubscribe("Weekly")}>Subscribe</button>
            </div>
          </div>
        </div>

        {/* Monthly Plan */}
        <div className="col-md-4 mb-3">
          <div className="card shadow h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">Monthly Plan</h5>
              <p className="card-text">Fresh milk delivered every day for a month.</p>
              <p className="fw-bold text-success">₹550</p>
              <button className="btn btn-primary" onClick={() => handleSubscribe("Monthly")}>Subscribe</button>
            </div>
          </div>
        </div>

        {/* 3 Months Plan */}
        <div className="col-md-4 mb-3">
          <div className="card shadow h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">3 Months Plan</h5>
              <p className="card-text">Get a 5% discount on a 3-month subscription.</p>
              <p className="fw-bold text-success">₹1,500</p>
              <button className="btn btn-primary" onClick={() => handleSubscribe("3 Months")}>Subscribe</button>
            </div>
          </div>
        </div>

        {/* 6 Months Plan */}
        <div className="col-md-6 mb-3">
          <div className="card shadow h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">6 Months Plan</h5>
              <p className="card-text">Save more with a 6-month milk subscription.</p>
              <p className="fw-bold text-success">₹2,900</p>
              <button className="btn btn-primary" onClick={() => handleSubscribe("6 Months")}>Subscribe</button>
            </div>
          </div>
        </div>

        {/* 1 Year Plan */}
        <div className="col-md-6 mb-3">
          <div className="card shadow h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">1 Year Plan</h5>
              <p className="card-text">Get the best value for a full-year subscription.</p>
              <p className="fw-bold text-success">₹5,500</p>
              <button className="btn btn-primary" onClick={() => handleSubscribe("1 Year")}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Plan Confirmation */}
      {selectedPlan && (
        <div className="alert alert-success mt-4 text-center">
          You have successfully subscribed to the <strong>{selectedPlan}</strong> plan!
        </div>
      )}
    </div>
  );
};

export default Subscribe;
