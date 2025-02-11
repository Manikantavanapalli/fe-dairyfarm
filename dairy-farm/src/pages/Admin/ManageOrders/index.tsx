import { useState, useEffect } from "react";

const ManageOrders: React.FC = () => {
  const [orders, setOrders] = useState<{ id: number; user: string; status: string }[]>([]);

  useEffect(() => {
    // Fetch orders from API (dummy data for now)
    setOrders([
      { id: 1, user: "John Doe", status: "Pending" },
      { id: 2, user: "Jane Smith", status: "Shipped" },
    ]);
  }, []);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Manage Orders</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">Order ID</th>
            <th className="border p-2">Customer</th>
            <th className="border p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} className="border">
              <td className="border p-2">{order.id}</td>
              <td className="border p-2">{order.user}</td>
              <td className="border p-2">{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageOrders;
