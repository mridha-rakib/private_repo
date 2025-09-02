// src/routes/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => state.auth);
  if (userInfo === null || userInfo === undefined) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;

const initialState1 = {
  userInfo:
    typeof window !== "undefined" && localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
};
