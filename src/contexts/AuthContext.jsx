// src/contexts/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext();
export { AuthContext };

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app load
    const token = localStorage.getItem("token");
    const email = localStorage.getItem("email");

    if (token && email) {
      setCurrentUser(email);
    }

    setLoading(false);
  }, []);

  const login = (email, token) => {
    localStorage.setItem("token", token);
    localStorage.setItem("email", email);
    setCurrentUser(email);
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("email");
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
