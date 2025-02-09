import React, { useState } from "react";
import SubscriptionPlan from "../../components/SubscribePlanComp";
import { motion } from "framer-motion";

const plans = [
  { name: "Weekly Plan", price: 140, frequency: "week" },
  { name: "Monthly Plan", price: 550, frequency: "month" },
  { name: "3 Months Plan", price: 1500, frequency: "3 months" },
  { name: "6 Months Plan", price: 2900, frequency: "6 months" },
  { name: "1 Year Plan", price: 5500, frequency: "year" },
];

const milkPrices = {
  "250ml": 25,
  "500ml": 50,
  "750ml": 75,
  "1L": 100,
};

const Subscribe: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState<keyof typeof milkPrices>("250ml");
  const [customQuantity, setCustomQuantity] = useState<number | null>(null);

  const handleSubscribe = (planName: string) => {
    setSelectedPlan(planName);
    const quantityPrice = customQuantity ? (customQuantity / 250) * 25 : milkPrices[selectedQuantity];

    alert(
      `You have subscribed to the ${planName} plan with ${customQuantity || selectedQuantity} milk per delivery.\nTotal Price: ₹${quantityPrice * plans.find(p => p.name === planName)!.price / 140}`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 py-14 px-8">
      <h2 className="text-5xl font-extrabold text-center text-gray-900 mb-12 drop-shadow-md">
        🥛 Select Your Subscription Plan
      </h2>

      {/* Milk Quantity Selection */}
      <div className="mb-10">
        <h5 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          Choose Milk Quantity Per Delivery:
        </h5>
        <div className="flex flex-wrap justify-center gap-6">
          {Object.entries(milkPrices).map(([size, price]) => (
            <motion.div
              whileHover={{ scale: 1.1 }}
              key={size}
              className={`p-6 rounded-2xl border transition-all cursor-pointer text-center w-44 shadow-md
                ${
                  selectedQuantity === size
                    ? "border-orange-500 bg-orange-100 shadow-lg scale-105"
                    : "border-gray-300 bg-white hover:shadow-xl"
                }`}
              onClick={() => {
                setSelectedQuantity(size as keyof typeof milkPrices);
                setCustomQuantity(null);
              }}
            >
              <h6 className="text-2xl font-bold text-gray-800">{size}</h6>
              <p className="text-gray-600 text-lg">₹{price}</p>
            </motion.div>
          ))}

          {/* Custom Quantity Input */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="p-6 rounded-2xl border border-yellow-600 bg-white text-center w-44 shadow-md"
          >
            <h6 className="text-2xl font-bold text-yellow-600">Custom (ml)</h6>
            <input
              type="number"
              className="mt-3 border p-3 rounded-lg w-32 text-center text-lg font-semibold text-gray-800"
              placeholder="Min 251ml"
              min="251"
              step="50"
              value={customQuantity || ""}
              onChange={(e) => {
                const value = parseInt(e.target.value);
                if (!isNaN(value) && value > 250) {
                  setCustomQuantity(value);
                  setSelectedQuantity("Custom" as keyof typeof milkPrices);
                }
              }}
            />
          </motion.div>
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <SubscriptionPlan
            key={index}
            plan={plan}
            quantity={customQuantity || selectedQuantity}
            pricePerUnit={customQuantity ? (customQuantity / 250) * 25 : milkPrices[selectedQuantity]}
            onSubscribe={handleSubscribe}
          />
        ))}
      </div>

      {/* Selected Plan Confirmation */}
      {selectedPlan && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-10 bg-green-200 text-green-900 text-center p-6 rounded-lg shadow-lg text-2xl font-semibold"
        >
          ✅ You have successfully subscribed to the <strong>{selectedPlan}</strong> plan!
        </motion.div>
      )}
    </div>
  );
};

export default Subscribe;
