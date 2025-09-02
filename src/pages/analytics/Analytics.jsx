import React, { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell } from "recharts";
import UserTrend from "../../components/dashboard/UserTrend";

const Analytics = () => {
  const chartData = [
    { year: "2014", newUser: 250, oldUser: 180 },
    { year: "2015", newUser: 320, oldUser: 220 },
    { year: "2016", newUser: 180, oldUser: 140 },
    { year: "2017", newUser: 280, oldUser: 200 },
    { year: "2018", newUser: 230, oldUser: 160 },
    { year: "2019", newUser: 190, oldUser: 120 },
    { year: "2020", newUser: 240, oldUser: 180 },
    { year: "2021", newUser: 260, oldUser: 200 },
    { year: "2022", newUser: 310, oldUser: 240 },
    { year: "2023", newUser: 280, oldUser: 210 },
  ];

  const [selectedYear, setSelectedYear] = useState("Yearly");

  const [selectedPeriod, setSelectedPeriod] = useState("Yearly");

  // Metrics data
  const metrics = [
    { title: "Total Users", value: "1,250", bgColor: "bg-gray-50" },
    { title: "Daily Uploads", value: "1,250", bgColor: "bg-gray-50" },
    { title: "Active Users", value: "1,250", bgColor: "bg-gray-50" },
  ];

  // User trend chart data
  const userTrendData = [
    { year: "2014", newUser: 250, oldUser: 200 },
    { year: "2015", newUser: 300, oldUser: 120 },
    { year: "2016", newUser: 320, oldUser: 140 },
    { year: "2017", newUser: 220, oldUser: 80 },
    { year: "2018", newUser: 230, oldUser: 90 },
    { year: "2019", newUser: 180, oldUser: 250 },
    { year: "2020", newUser: 200, oldUser: 220 },
    { year: "2021", newUser: 150, oldUser: 200 },
    { year: "2022", newUser: 300, oldUser: 100 },
    { year: "2023", newUser: 280, oldUser: 320 },
  ];

  // Popular styles data
  const popularStylesData = [
    { label: "Streetwear", value: 320 },
    { label: "Formal", value: 210 },
    { label: "Vintage", value: 180 },
    { label: "Boho", value: 120 },
    { label: "Minimal", value: 300 },
  ];

  const userStats = {
    newUsers: "1,234",
    oldUsers: "1,234"
  };

  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-[32px] sm:text-3xl lg:text-4xl font-bold text-gray-900">
          Analytics
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mt-1">
          Analytics
        </p>
      </div>

      {/* Top Metrics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
        {metrics.map((metric, index) => (
          <div key={index} className={`${metric.bgColor} rounded-lg p-4 sm:p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow`}>
            <h3 className="text-xs sm:text-sm font-medium text-gray-600 mb-2">{metric.title}</h3>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900">{metric.value}</p>
          </div>
        ))}
      </div>

      {/* User Trend Section */}
     <UserTrend />

      {/* Popular Styles Section */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 mb-2">
        <div className="mb-6">
          <h2 className="text-[32px] sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-1">
            Popular Styles
          </h2>
          <p className="text-sm text-gray-600">
            Popular Styles
          </p>
        </div>

        {/* Popular Styles Chart */}
        <div className="h-64 sm:h-80 overflow-hidden">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={popularStylesData}
              margin={{
                top: 20,
                right: window.innerWidth < 640 ? 10 : 30,
                left: window.innerWidth < 640 ? 10 : 20,
                bottom: 5
              }}
            >
              <XAxis
                dataKey="label"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: window.innerWidth < 640 ? 10 : 12 }}
                stroke="#6B7280"
                angle={window.innerWidth < 640 ? -45 : 0}
                textAnchor={window.innerWidth < 640 ? 'end' : 'middle'}
                height={window.innerWidth < 640 ? 60 : 30}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: window.innerWidth < 640 ? 10 : 12 }}
                stroke="#6B7280"
                domain={[0, 400]}
                width={window.innerWidth < 640 ? 30 : 60}
              />
              <Bar dataKey="value" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Popular Styles Mobile List */}
        <div className="mt-6 sm:hidden">
          <h3 className="text-[32px] sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Popular Styles
          </h3>
          <div className="space-y-2">
            {popularStylesData
              .sort((a, b) => b.value - a.value)
              .map((style, index) => (
                <div key={style.label} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-medium text-gray-500">#{index + 1}</span>
                    <span className="text-sm font-medium text-gray-900">{style.label}</span>
                  </div>
                  <span className="text-sm font-bold text-purple-600">{style.value}</span>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;