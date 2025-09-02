import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ children }) => {
  const { userInfo } = useSelector((state) => state.auth);

  // Only redirect if userInfo exists and is truthy
  if (userInfo) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default PublicRoute;
