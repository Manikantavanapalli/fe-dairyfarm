import React from "react";

const Profile = () => {
  // Static user details (can be fetched from API later)
  const user = {
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+91 9876543210",
    address: "123, Green Avenue, New Delhi, India",
    pincode: "110001",
    profileImage: "https://via.placeholder.com/150", // Replace with actual image URL
  };

  const orders = [
    { id: "ORD123", date: "Feb 5, 2024", total: "₹500", status: "Delivered" },
    { id: "ORD124", date: "Feb 8, 2024", total: "₹750", status: "Processing" },
  ];

  const subscriptions = [
    { plan: "Monthly", quantity: "1 Litre", delivery: "Morning (6:00 AM - 9:00 AM)" },
    { plan: "3 Months", quantity: "500ml", delivery: "Evening (5:00 PM - 8:00 PM)" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex justify-center py-10">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        {/* Profile Section */}
        <div className="flex flex-col items-center">
          <img src={user.profileImage} alt="Profile" className="w-24 h-24 rounded-full shadow-md border-4 border-blue-500" />
          <h2 className="text-2xl font-bold mt-4 text-gray-800">{user.name}</h2>
          <p className="text-gray-600">{user.email}</p>
          <p className="text-gray-600">{user.phone}</p>
          <p className="text-gray-600">{user.address}, {user.pincode}</p>
          <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-md">
            ✏️ Edit Profile
          </button>
        </div>

        {/* Order History Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-800 border-b pb-2 border-gray-300">📦 Order History</h3>
          {orders.length > 0 ? (
            <ul className="mt-4 space-y-3">
              {orders.map((order) => (
                <li key={order.id} className="p-4 bg-gray-50 rounded-lg shadow-sm flex justify-between items-center">
                  <div>
                    <p className="text-gray-700 font-semibold">Order ID: {order.id}</p>
                    <p className="text-gray-500">Date: {order.date}</p>
                    <p className="text-gray-500">Total: {order.total}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${
                      order.status === "Delivered" ? "bg-green-200 text-green-700" : "bg-yellow-200 text-yellow-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 mt-2">No orders placed yet.</p>
          )}
        </div>

        {/* Subscription Details Section */}
        <div className="mt-8">
          <h3 className="text-xl font-bold text-gray-800 border-b pb-2 border-gray-300">🥛 Subscription Details</h3>
          {subscriptions.length > 0 ? (
            <ul className="mt-4 space-y-3">
              {subscriptions.map((sub, index) => (
                <li key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                  <p className="text-gray-700 font-semibold">Plan: {sub.plan}</p>
                  <p className="text-gray-500">Quantity: {sub.quantity}</p>
                  <p className="text-gray-500">Delivery: {sub.delivery}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600 mt-2">No active subscriptions.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
