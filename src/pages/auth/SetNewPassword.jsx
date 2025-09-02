import React, { useState } from "react";
import { RaiLogo, GoogleLogo, Back } from "../../assets/logos/logo";
import { useNavigate } from "react-router-dom";
import bgfill from "../../assets/images/bgfill.png";
function SetNewPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleBackToLogin = () => {
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/successful");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center p-4 sm:p-6" style={{ backgroundImage: `url(${bgfill})` }}>
      <div className="w-full max-w-md mx-auto">
        <div className=" shadow-lg rounded-lg p-6 sm:p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex justify-center mb-2">
              <RaiLogo width="250px" height="62px" className="sm:w-[300px] sm:h-[74.25px]" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2 text-center">
              Set New Password
            </h2>
            <p className="text-center">
              Set a new password to secure your account.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                required
              />

              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1 mt-4">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full h-12 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full h-10 sm:h-12 bg-[#5700FE] text-white px-4 rounded-md hover:bg-[#003bfece] cursor-pointer font-medium"
            >
              Next
            </button>

            <button
              type="button"
              onClick={handleBackToLogin}
              className="w-full h-12 px-4 rounded-md flex items-center justify-center gap-2 cursor-pointer text-gray-700  transition-colors"
            >
              <Back fill="currentColor" />
              <span className="font-medium">Back to Login</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SetNewPassword;
