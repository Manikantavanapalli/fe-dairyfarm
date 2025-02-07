import axios from "axios";

const API_URL = "http://localhost:5000"; // JSON Server URL

// Register User
export const registerUser = async (name: string, email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/users`, { name, email, password });
    return response.data;
  } catch (error) {
    console.error("Registration failed:", error);
    throw error;
  }
};

// Login User
export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.get(`${API_URL}/users?email=${email}`);
    const user = response.data[0];

    if (user && user.password === password) {
      return user;
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};
