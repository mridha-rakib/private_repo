import UserTrend from "../../components/dashboard/UserTrend";

import { useSelector } from "react-redux";
import { useGetDashboardStatsQuery } from "../../redux/slices/dashboardApiSlice";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const { data, error, isLoading } = useGetDashboardStatsQuery();

  console.log(data);

  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (error && !hasError) {
      setHasError(true);
      console.error("Dashboard API Error:", error);
    }
  }, [error, hasError]);

  if (isLoading) {
    return (
      <div className="w-full bg-white p-6">
        <div className="animate-pulse">
          <h1 className="text-4xl font-bold text-gray-300 mb-6">
            Loading Dashboard...
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-gray-200 h-32 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  // Error state with detailed error info
  if (error) {
    return (
      <div className="w-full bg-white p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-red-800 font-semibold text-xl">
            Dashboard Load Error
          </h2>
          <div className="mt-4 text-sm">
            <p>
              <strong>Status:</strong> {error?.status || "Unknown"}
            </p>
            <p>
              <strong>Message:</strong>{" "}
              {error?.data?.message || error?.error || "Unknown error"}
            </p>
            <p>
              <strong>Authenticated:</strong>{" "}
            </p>
          </div>
          <pre className="mt-4 text-xs bg-red-100 p-2 rounded overflow-auto">
            {JSON.stringify(error, null, 2)}
          </pre>
        </div>
      </div>
    );
  }
  // Data validation
  if (!data) {
    return (
      <div className="w-full bg-white p-6">
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
          <h2 className="text-yellow-800 font-semibold">No Data Received</h2>
          <p>The API call succeeded but returned no data.</p>
        </div>
      </div>
    );
  }
  const metricCards = [
    { title: "Total Users", value: "1,250", bgColor: "bg-white" },
    { title: "Daily Uploads", value: "1,250", bgColor: "bg-white" },
    { title: "Active Users", value: "1,250", bgColor: "bg-white" },
  ];
  // Metric cards data for second row
  const secondRowCards = [
    { title: "Content Moderation", value: "1,250", bgColor: "bg-gray-50" },
    { title: "User Feedback", value: "1,250", bgColor: "bg-gray-50" },
    { title: "Data Compliance", value: "1,250", bgColor: "bg-gray-50" },
    { title: "Affiliate Links", value: "1,250", bgColor: "bg-gray-50" },
  ];

  return (
    <div className="w-full bg-white">
      {/* Header */}
      <div className="mb-6 ">
        <h1 className="text-[32px] sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Dashboard
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-1">
          Welcome to your dashboard
        </p>
      </div>

      {/* Top Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {metricCards.map((card, index) => (
          <div
            key={index}
            className="bg-[#F5F4F7] rounded-lg p-4 sm:p-6 shadow-sm  hover:shadow-md transition-shadow"
          >
            <h3 className="text-xs sm:text-sm font-medium text-gray-600 mb-2">
              {card.title}
            </h3>
            <p className="text-[24px] sm:text-3xl font-bold text-gray-900">
              {card.value}
            </p>
          </div>
        ))}
      </div>

      {/* Second Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {secondRowCards.map((card, index) => (
          <div
            key={index}
            className="bg-[#F5F4F7] rounded-lg p-4 sm:p-6 shadow-sm  hover:shadow-md transition-shadow"
          >
            <h3 className="text-xs sm:text-sm font-medium text-gray-600 mb-2">
              {card.title}
            </h3>
            <p className="text-[24px] sm:text-2xl lg:text-3xl font-bold text-gray-900">
              {card.value}
            </p>
          </div>
        ))}
      </div>

      {/* User Trend Chart */}
      <UserTrend />
    </div>
  );
};

export default Dashboard;
