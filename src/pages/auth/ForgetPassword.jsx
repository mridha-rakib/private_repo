import React, { useState } from "react";
import { RaiLogo, Back } from "../../assets/logos/logo";
import { useNavigate } from "react-router-dom";
import bgfill from "../../assets/images/bgfill.png";
function ForgetPassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  


  const handleBackToLogin = () => {
    navigate('/');
  };

  const handleNext = () => {
    navigate('/verify-otp');
  };

  return (
    <div className="min-h-screen flex items-center justify-center  bg-cover bg-center p-4 sm:p-6" style={{ backgroundImage: `url(${bgfill})` }}>
      <div className="w-full max-w-md mx-auto">
        <div className=" shadow-lg rounded-lg p-6 sm:p-8">
          {/* Header */}
          <div className="mb-8">
            <div className="flex justify-center mb-2">
              <RaiLogo width="250px" height="62px" className="sm:w-[300px] sm:h-[74.25px]" />
            </div>
            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 text-center">
              Forgot Password
            </h2>
            <p className="text-sm sm:text-base text-center">Enter your email address and we'll send you a link to reset your password.</p>
          </div>

          {/* Form */}
          <form onSubmit={(e) => { e.preventDefault(); handleNext(); }} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                required
              />
            </div>

            {/* Next button */}
            <button
              type="submit"
              className="w-full h-12 bg-[#5700FE] text-white px-4 rounded-md hover:bg-[#003bfece] cursor-pointer font-medium transition-colors"
            >
              Next
            </button>

            {/* Back to Login */}
            <button
              type="button"
              onClick={handleBackToLogin}
              className="w-full h-12 px-4 rounded-md flex items-center justify-center gap-2 cursor-pointer text-gray-700  transition-colors"
            >
              <Back fill='currentColor' />
              <span className="font-medium">
                Back to Login
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
