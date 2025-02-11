import React, { useState } from "react";
import { FiBox, FiShoppingCart, FiUsers, FiDollarSign, FiEdit, FiTrash, FiPlus } from "react-icons/fi";

const AdminDashboard: React.FC = () => {
  // Static Data (To Be Fetched from API Later)
  const totalUsers = 120;
  const totalOrders = 45;
  const totalRevenue = "₹85,000";
  const totalProducts = 18;

  // Placeholder Orders
  const [orders] = useState([
    { id: "#ORD001", customer: "John Doe", date: "Feb 5, 2024", status: "Delivered", amount: "₹500" },
    { id: "#ORD002", customer: "Jane Smith", date: "Feb 8, 2024", status: "Pending", amount: "₹750" },
  ]);

  // Placeholder Products
  const [products] = useState([
    { id: "P001", name: "Fresh Cow Milk", price: "₹50/L", stock: 20 },
    { id: "P002", name: "Organic Ghee", price: "₹350/500g", stock: 15 },
  ]);

  return (
    <div className="min-h-screen flex bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-800 text-white py-6 px-4">
        <h2 className="text-2xl font-bold mb-6">🛠️ Admin Panel</h2>
        <ul>
          <li className="py-2 hover:bg-blue-700 px-4 rounded cursor-pointer">Dashboard</li>
          <li className="py-2 hover:bg-blue-700 px-4 rounded cursor-pointer">Manage Orders</li>
          <li className="py-2 hover:bg-blue-700 px-4 rounded cursor-pointer">Manage Products</li>
        </ul>
      </aside>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {[
            { icon: <FiUsers />, label: "Total Users", value: totalUsers, color: "bg-blue-500" },
            { icon: <FiShoppingCart />, label: "Total Orders", value: totalOrders, color: "bg-green-500" },
            { icon: <FiDollarSign />, label: "Revenue", value: totalRevenue, color: "bg-yellow-500" },
            { icon: <FiBox />, label: "Total Products", value: totalProducts, color: "bg-red-500" },
          ].map((stat, index) => (
            <div key={index} className={`p-6 rounded-lg shadow-lg text-white ${stat.color}`}>
              <div className="text-4xl mb-2">{stat.icon}</div>
              <h3 className="text-lg">{stat.label}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Orders Management */}
        <div className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h3 className="text-xl font-bold mb-4">📦 Manage Orders</h3>
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3">Order ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Date</th>
                <th className="p-3">Status</th>
                <th className="p-3">Amount</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b">
                  <td className="p-3">{order.id}</td>
                  <td className="p-3">{order.customer}</td>
                  <td className="p-3">{order.date}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        order.status === "Delivered" ? "bg-green-200 text-green-700" : "bg-yellow-200 text-yellow-700"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-3">{order.amount}</td>
                  <td className="p-3">
                    <button className="text-blue-600 hover:text-blue-800 mr-2"><FiEdit /></button>
                    <button className="text-red-600 hover:text-red-800"><FiTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Products Management */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4">🛍️ Manage Products</h3>
          <button className="bg-green-500 text-white py-2 px-4 rounded-lg mb-4 flex items-center gap-2">
            <FiPlus /> Add Product
          </button>
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-200">
                <th className="p-3">Product ID</th>
                <th className="p-3">Name</th>
                <th className="p-3">Price</th>
                <th className="p-3">Stock</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="border-b">
                  <td className="p-3">{product.id}</td>
                  <td className="p-3">{product.name}</td>
                  <td className="p-3">{product.price}</td>
                  <td className="p-3">{product.stock}</td>
                  <td className="p-3">
                    <button className="text-blue-600 hover:text-blue-800 mr-2"><FiEdit /></button>
                    <button className="text-red-600 hover:text-red-800"><FiTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
