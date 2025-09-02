import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicRoute from "./routes/PublicRoute";
import ProtectedRoute from "./routes/ProtectedRoute";
import Login from "./pages/auth/Login";
import DashboardLayout from "./layouts/dashboard/DashboardLayout";
import Signup from "./pages/auth/Signup";
import ForgetPassword from "./pages/auth/ForgetPassword";
import VerifyOtp from "./pages/auth/VerifyOtp";
import SetNewPassword from "./pages/auth/SetNewPassword";
import Successful from "./pages/auth/Successful";
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/users/Users";
import ContentModeration from "./pages/contentmoderation/ContentModeration";
import Analytics from "./pages/analytics/Analytics";
import AffiliatedData from "./pages/affliateddata/AffiliatedData";
import Feedback from "./pages/feedback/Feedback";
import DataManagement from "./pages/datamanagement/DataManagement";
import Products from "./pages/products/Products";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import { loadFromStorage } from "./redux/slices/authSlice";
import { ToastContainer } from "react-toastify";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Load auth state from localStorage when app starts
    // dispatch(loadFromStorage());
  }, [dispatch]);

  return (
    <>
      <ToastContainer />
      <Router>
        <Routes>
          {/* Public Routes */}
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/signup"
            element={
              <PublicRoute>
                <Signup />
              </PublicRoute>
            }
          />
          <Route
            path="/forget-password"
            element={
              <PublicRoute>
                <ForgetPassword />
              </PublicRoute>
            }
          />
          <Route
            path="/verify-otp"
            element={
              <PublicRoute>
                <VerifyOtp />
              </PublicRoute>
            }
          />
          <Route
            path="/set-new-password"
            element={
              <PublicRoute>
                <SetNewPassword />
              </PublicRoute>
            }
          />
          <Route
            path="/successful"
            element={
              <PublicRoute>
                <Successful />
              </PublicRoute>
            }
          />

          {/* Protected Routes */}
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="users">
              <Route index element={<Users />} />
              {/* <Route path=":userId" element={<ViewUsers />} /> */}
            </Route>
            <Route path="content-moderation">
              <Route index element={<ContentModeration />} />
              {/* <Route path="view" element={<ViewContent />} /> */}
            </Route>
            <Route path="analytics" element={<Analytics />} />
            <Route path="products">
              <Route index element={<Products />} />
              {/* <Route path="view" element={<ViewProducts />} /> */}
            </Route>
            <Route path="affiliated-data">
              <Route index element={<AffiliatedData />} />
              {/* <Route path="view" element={<ViewAffiliatedData />} /> */}
            </Route>
            <Route path="feedback" element={<Feedback />} />
            <Route path="data-management" element={<DataManagement />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
