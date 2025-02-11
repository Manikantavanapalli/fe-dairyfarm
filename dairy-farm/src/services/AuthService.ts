import axios from "axios";

const API_URL = "https://your-api-url.com/api/auth"; // Replace with your actual API URL

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data; // Assuming the API returns user data on successful login
  } catch (error: any) {
    throw new Error(error.response?.data?.message || "Login failed");
  }
};

export const logoutUser = () => {
  localStorage.removeItem("user");
};

export const getCurrentUser = () => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};
