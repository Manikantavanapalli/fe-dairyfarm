import React, { createContext, useContext, useState, useEffect } from "react";

// Define types for User and AuthContext
interface User {
  id: string;
  name: string;
  email: string;
  role: "user" | "admin";
  token: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Create AuthContext with default values
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Auth Provider Component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  // Load user from local storage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Login function
  const login = async (email: string, password: string) => {
    try {
      const response = await fakeApiLogin(email, password);

      if (response.success && response.user) {
        setUser(response.user);
        localStorage.setItem("user", JSON.stringify(response.user));
      } else {
        throw new Error(response.message || "Login failed");
      }
    } catch (error) {
      console.error("Login Error:", error);
      throw error; // Re-throw the error to handle it in the Login component
    }
  };

  // Register function
  const register = async (name: string, email: string, password: string) => {
    try {
      const response = await fakeApiRegister(name, email, password);

      if (response.success && response.user) {
        setUser(response.user);
        localStorage.setItem("user", JSON.stringify(response.user));
      } else {
        throw new Error(response.message || "Registration failed");
      }
    } catch (error) {
      console.error("Register Error:", error);
      throw error; // Re-throw the error to handle it in the Register component
    }
  };

  // Logout function
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

// Simulated API Calls (Replace with real API later)
const fakeApiLogin = async (email: string, password: string) => {
  return new Promise<{ success: boolean; user?: User; message?: string }>((resolve) => {
    setTimeout(() => {
      if (email === "admin@example.com" && password === "password") {
        resolve({
          success: true,
          user: { id: "1", name: "Admin", email, role: "admin", token: "fake-jwt-token" },
        });
      } else if (email === "user@example.com" && password === "password") {
        resolve({
          success: true,
          user: { id: "2", name: "User", email, role: "user", token: "fake-jwt-token" },
        });
      } else {
        resolve({ success: false, message: "Invalid credentials" });
      }
    }, 1000);
  });
};

const fakeApiRegister = async (name: string, email: string, password: string) => {
  return new Promise<{ success: boolean; user?: User; message?: string }>((resolve) => {
    setTimeout(() => {
      if (email.includes("@")) {
        resolve({
          success: true,
          user: { id: "3", name, email, role: "user", token: "fake-jwt-token" },
        });
      } else {
        resolve({ success: false, message: "Invalid email format" });
      }
    }, 1000);
  });
};