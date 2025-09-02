import { useEffect, useState } from "react";
import { GoogleLogo, RaiLogo } from "../../assets/logos/logo";
import { useNavigate } from "react-router-dom";
import phonebg from "../../assets/images/phonebg.jpg";
import phoneImage from "../../assets/images/phoneImage.png";
import bgfill from "../../assets/images/bgfill.png";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../redux/slices/adminApiSlice";
import { setCredentials } from "../../redux/slices/authSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [login, { _isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  // const { search } = useLocation();
  // const sp = new URLSearchParams(search);
  // const redirect = sp.get("redirect") || "/";

  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [navigate, userInfo]);

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login attempt:", { email, password });

    try {
      const res = await login({ email, password }).unwrap();
      console.log(res);

      dispatch(setCredentials({ ...res }));
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  const handleGoogleLogin = () => {
    console.log("Google login clicked");
    // Add Google OAuth logic here
  };
  return (
    <div className="min-h-screen bg-white flex overflow-hidden text-[#5C526D]">
      {/* Left side - Mobile mockup - Hidden on mobile, visible on large screens */}
      <div
        className="hidden lg:flex flex-1 items-center justify-center px-4 md:px-8 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${phonebg})` }}
      >
        {/* Shadow Overlay on Background */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>
        {/* Content Above the Shadow */}
        <div className="relative z-10 flex flex-col items-center">
          <img
            src={phoneImage}
            alt="Decorative Art"
            className="h-[850px] w-[380px] rounded-2xl object-contain"
          />
        </div>
      </div>
      {/* Right side - Login form */}
      <div
        className="flex-1 flex items-center justify-center px-4 md:px-8 min-h-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bgfill})` }}
      >
        <div className="w-full max-w-md mx-auto">
          <div className=" shadow-lg rounded-lg p-6 sm:p-8">
            {/* Header */}
            <div className="mb-8">
              <div className="flex justify-center mb-2">
                <RaiLogo
                  width="250px"
                  height="62px"
                  className="sm:w-[300px] sm:h-[74.25px]"
                />
              </div>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-2 text-center">
                Login
              </h2>
              <p className="text-sm sm:text-base text-center">
                Login to your account
              </p>
            </div>
            {/* Login form */}
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-1"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-10 sm:h-12 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium mb-1"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-10 sm:h-12 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                  placeholder="Enter your password"
                />
                <div className="text-right mt-1">
                  <button
                    type="button"
                    onClick={() => navigate("/forget-password")}
                    className="text-sm text-[#5700FE] cursor-pointer"
                  >
                    Forgot Password?
                  </button>
                </div>
              </div>
              <button
                onClick={handleLogin}
                className="w-full h-10 sm:h-12 bg-[#5700FE] text-white px-4 rounded-md hover:bg-[#003bfece] cursor-pointer"
              >
                Login
              </button>
            </div>
            {/* Sign up link */}
            <div className="text-center mt-6">
              <span>Don't have an account?</span>
              <button
                onClick={() => navigate("/signup")}
                className="text-[#5700FE] hover:text-[#003bfece] text-sm cursor-pointer"
              >
                Create Account
              </button>
            </div>
            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50">Or</span>
              </div>
            </div>
            {/* Google login */}
            <button
              type="button"
              onClick={handleGoogleLogin}
              className="w-full h-12 flex items-center justify-center gap-x-2 px-4 border border-gray-300 rounded-md shadow-sm  text-gray-700 hover:shadow-md cursor-pointer"
            >
              <GoogleLogo />
              Google Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
