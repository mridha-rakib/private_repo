import { RaiLogo, Back } from "../../assets/logos/logo";
import { useNavigate } from "react-router-dom";
import bgfill from "../../assets/images/bgfill.png";
function VerifyOtp() {
  const navigate = useNavigate();
  
  // This would typically come from your app's state or props
  const userEmail = "example@gmail.com";

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
              Verify
            </h2>
            <p className="text-center">
              Enter the verification code sent to {userEmail}
            </p>
          </div>

          {/* OTP Inputs */}
          <div className="space-y-6">
            <div className="flex flex-row gap-2 items-center justify-center">
              {[...Array(6)].map((_, index) => (
                <input
                  key={index}
                  type="text"
                  maxLength={1}
                  className="w-10 h-12 sm:w-12 text-center px-2 sm:px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={() => navigate("/set-new-password")}
              className="w-full h-10 sm:h-12 bg-[#5700FE] text-white px-4 rounded-md hover:bg-[#003bfece] cursor-pointer font-medium"
            >
              Next
            </button>

            {/* Resend OTP */}
            <div className="text-center space-x-2">
              <span >Didn't receive the code?</span>
              <button className="text-[#5700FE] hover:text-[#003bfece] text-[16px] cursor-pointer">
                Resend OTP
              </button>
            </div>

            {/* Back Button */}
            <button
              onClick={() => navigate("/")}
              className="w-full h-12 px-4 rounded-md flex items-center justify-center gap-2 cursor-pointer text-gray-700  transition-colors"
            >
              <Back fill="currentColor"  />
              <span className="font-medium">Back to Login</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyOtp;
