import axios from "axios";

const API_URL = "http://localhost:5000/users"; // Replace with your actual API URL

// Register User
export const registerUser = async (name: string, email: string, password: string, address: string) => {
  try {
    const response = await axios.post(`${API_URL}`, { name, email, password, address });
    return response.data; 
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

// Login User
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.get(`${API_URL}`); // Fetch users
    const users = response.data;

    // Find user with matching email and password
    const user = users.find((user: any) => user.email === email && user.password === password);

    if (!user) {
      throw new Error("Invalid email or password");
    }

    return user; // Return found user
  } catch (error: any) {
    throw new Error(error.message || "Login failed");
  }
};


// Logout User
export const logoutUser = () => {
  localStorage.removeItem("user");
};

// Get Current User
export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
