import { Link } from "react-router-dom";

const AdminSidebar: React.FC = () => {
  return (
    <aside className="w-64 h-screen bg-blue-800 text-white p-5">
      <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
      <nav>
        <ul className="space-y-4">
          <li><Link to="/admin" className="block hover:text-yellow-400">Dashboard</Link></li>
          <li><Link to="/admin/orders" className="block hover:text-yellow-400">Manage Orders</Link></li>
          <li><Link to="/admin/products" className="block hover:text-yellow-400">Manage Products</Link></li>
          <li><Link to="/admin/users" className="block hover:text-yellow-400">Manage Users</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
