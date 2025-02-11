import React, { useState } from "react";

const Orders = () => {
  // Static Order Data (Can be fetched from API)
  const initialOrders = [
    { id: "ORD001", date: "Feb 5, 2024", status: "Delivered", amount: "₹500" },
    { id: "ORD002", date: "Feb 8, 2024", status: "Pending", amount: "₹750" },
    { id: "ORD003", date: "Feb 10, 2024", status: "Canceled", amount: "₹400" },
  ];

  const [orders, setOrders] = useState(initialOrders);
  const [filter, setFilter] = useState("All");

  // Filter Orders Based on Status
  const filteredOrders = filter === "All" ? orders : orders.filter(order => order.status === filter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-6 flex justify-center">
      <div className="w-full max-w-5xl bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        {/* Page Title */}
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">📜 Order History</h2>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-3 mb-6">
          {["All", "Delivered", "Pending", "Canceled"].map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-4 py-2 rounded-lg font-medium shadow-md transition ${
                filter === status
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {status}
            </button>
          ))}
        </div>

        {/* Order Table */}
        {filteredOrders.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-gray-50 shadow-md rounded-lg">
              <thead>
                <tr className="bg-blue-600 text-white">
                  <th className="py-3 px-5 text-left">Order ID</th>
                  <th className="py-3 px-5 text-left">Date</th>
                  <th className="py-3 px-5 text-left">Status</th>
                  <th className="py-3 px-5 text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                {filteredOrders.map((order) => (
                  <tr key={order.id} className="border-b border-gray-200 hover:bg-gray-100 transition">
                    <td className="py-3 px-5">{order.id}</td>
                    <td className="py-3 px-5">{order.date}</td>
                    <td className="py-3 px-5">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          order.status === "Delivered"
                            ? "bg-green-200 text-green-700"
                            : order.status === "Pending"
                            ? "bg-yellow-200 text-yellow-700"
                            : "bg-red-200 text-red-700"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="py-3 px-5 font-semibold">{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-center text-gray-600 mt-4">🚀 No orders yet. Start ordering now!</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
