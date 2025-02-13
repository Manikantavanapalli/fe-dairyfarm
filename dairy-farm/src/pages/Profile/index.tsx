import React, { useEffect, useState } from "react";
import Skeleton from "../../components/Skeleton";
import axios from "axios";

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  pincode: string;
  profileImage: string;
}

interface Order {
  id: string;
  date: string;
  total: string;
  status: string;
}

interface Subscription {
  plan: string;
  quantity: string;
  delivery: string;
}

interface ProfileProps {
  userId?: string | null;
}

const Profile: React.FC<ProfileProps> = ({ userId }) => {
  const [user, setUser] = useState<User | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<User | null>(null);

  useEffect(() => {
    if (!userId) return;

    axios.get<User>(`http://localhost:5000/users/${userId}`)
      .then(response => setUser(response.data))
      .catch(error => console.error("Error fetching user:", error));

    axios.get<Order[]>(`http://localhost:5000/orders?userId=${userId}`)
      .then(response => setOrders(response.data))
      .catch(error => console.error("Error fetching orders:", error));

    axios.get<Subscription[]>(`http://localhost:5000/subscriptions?userId=${userId}`)
      .then(response => setSubscriptions(response.data))
      .catch(error => console.error("Error fetching subscriptions:", error));
  }, [userId]);

  if (!user) {
    return <div><Skeleton /></div>;
  }

  const handleEditClick = () => {
    setEditedUser(user);
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editedUser) {
      setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
    }
  };

  const handleSave = () => {
    if (!editedUser) return;

    axios.put(`http://localhost:5000/users/${userId}`, editedUser)
      .then(response => {
        setUser(response.data);
        setIsEditing(false);
      })
      .catch(error => console.error("Error updating user:", error));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex justify-center py-10">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl p-8 border border-gray-200">
        <div className="flex flex-col items-center">
          <img src={user.profileImage} alt="Profile" className="w-24 h-24 rounded-full shadow-md border-4 border-blue-500" />

          {isEditing ? (
            <div className="flex flex-col items-center">
              <input type="text" name="name" value={editedUser?.name} onChange={handleChange} className="border p-2 rounded-md mt-2" />
              <input type="text" name="email" value={editedUser?.email} onChange={handleChange} className="border p-2 rounded-md mt-2" />
              <input type="text" name="phone" value={editedUser?.phone} onChange={handleChange} className="border p-2 rounded-md mt-2" />
              <input type="text" name="address" value={editedUser?.address} onChange={handleChange} className="border p-2 rounded-md mt-2" />
              <input type="text" name="pincode" value={editedUser?.pincode} onChange={handleChange} className="border p-2 rounded-md mt-2" />

              <button onClick={handleSave} className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-md">
                ✅ Save Changes
              </button>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold mt-4 text-gray-800">{user.name}</h2>
              <p className="text-gray-600">{user.email}</p>
              <p className="text-gray-600">{user.phone}</p>
              <p className="text-gray-600">{user.address}, {user.pincode}</p>

              <button onClick={handleEditClick} className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-md">
                ✏️ Edit Profile
              </button>
            </div>
          )}
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
                    className={`px-3 py-1 rounded-full text-sm font-medium ${order.status === "Delivered" ? "bg-green-200 text-green-700" : "bg-yellow-200 text-yellow-700"
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

