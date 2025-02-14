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

interface ProfileProps {
  userId?: string | null;
}

const Profile: React.FC<ProfileProps> = ({ userId }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState<User | null>(null);
  const [profilePreview, setProfilePreview] = useState<string | null>(null);

  useEffect(() => {
    if (!userId) return;

    axios.get<User>(`http://localhost:5000/users/${userId}`)
      .then(response => {
        setUser(response.data);
        setEditedUser(response.data);
      })
      .catch(error => console.error("Error fetching user:", error));
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

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        setProfilePreview(reader.result as string);
        if (editedUser) {
          setEditedUser({ ...editedUser, profileImage: reader.result as string });
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-8 border border-gray-200">
        
        {/* Profile Picture */}
        <div className="flex flex-col items-center relative">
          <label htmlFor="profileImage" className="cursor-pointer relative group">
            <img 
              src={profilePreview || user.profileImage} 
              alt="Profile" 
              className="w-32 h-32 rounded-full shadow-lg border-4 border-blue-500 object-cover transition-transform transform group-hover:scale-105"
            />
            {isEditing && (
              <span className="absolute bottom-0 right-0 bg-blue-600 text-white px-2 py-1 text-xs rounded-full shadow-md">
                📷 Edit
              </span>
            )}
          </label>
          {isEditing && (
            <input 
              type="file" 
              id="profileImage" 
              accept="image/*" 
              onChange={handleImageChange} 
              className="hidden"
            />
          )}
        </div>

        {/* Profile Form */}
        <div className="mt-6">
          {isEditing ? (
            <div className="space-y-4">
              {["name", "phone", "address", "pincode"].map((field) => (
                <div key={field} className="flex flex-col">
                  <label className="text-gray-700 font-medium capitalize">{field}</label>
                  <input 
                    type="text" 
                    name={field} 
                    value={editedUser ? (editedUser as any)[field] : ""} 
                    onChange={handleChange} 
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              ))}

              {/* Email - Read-only */}
              <div className="flex flex-col">
                <label className="text-gray-700 font-medium">Email</label>
                <input 
                  type="text" 
                  name="email" 
                  value={user.email} 
                  readOnly 
                  className="w-full p-3 border border-gray-300 rounded-lg bg-gray-100 text-gray-500 cursor-not-allowed"
                />
              </div>

              <div className="flex space-x-4 mt-4">
                <button 
                  onClick={handleSave} 
                  className="flex-1 bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition shadow-md"
                >
                  ✅ Save
                </button>
                <button 
                  onClick={() => setIsEditing(false)} 
                  className="flex-1 bg-gray-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-gray-600 transition shadow-md"
                >
                  ❌ Cancel
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-gray-600 mt-2">{user.email}</p>
              <p className="text-gray-600">{user.phone}</p>
              <p className="text-gray-600">{user.address}, {user.pincode}</p>

              <button 
                onClick={handleEditClick} 
                className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition shadow-md"
              >
                ✏️ Edit Profile
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
