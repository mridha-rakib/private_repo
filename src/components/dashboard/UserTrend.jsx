import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";

const yearlyData = [
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

const monthlyData = [
  { month: "Jan", newUser: 120, oldUser: 100 },
  { month: "Feb", newUser: 140, oldUser: 110 },
  { month: "Mar", newUser: 160, oldUser: 130 },
  { month: "Apr", newUser: 100, oldUser: 90 },
  { month: "May", newUser: 180, oldUser: 140 },
  { month: "Jun", newUser: 200, oldUser: 160 },
  { month: "Jul", newUser: 220, oldUser: 180 },
  { month: "Aug", newUser: 210, oldUser: 170 },
  { month: "Sep", newUser: 190, oldUser: 150 },
  { month: "Oct", newUser: 170, oldUser: 130 },
  { month: "Nov", newUser: 150, oldUser: 120 },
  { month: "Dec", newUser: 130, oldUser: 110 },
];

const weeklyData = [
  { week: "Week 1", newUser: 60, oldUser: 40 },
  { week: "Week 2", newUser: 80, oldUser: 50 },
  { week: "Week 3", newUser: 70, oldUser: 60 },
  { week: "Week 4", newUser: 90, oldUser: 70 },
];

const UserTrend = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("Yearly");

  let chartData = [];
  let dataKey = "";

  switch (selectedPeriod) {
    case "Monthly":
      chartData = monthlyData;
      dataKey = "month";
      break;
    case "Weekly":
      chartData = weeklyData;
      dataKey = "week";
      break;
    default:
      chartData = yearlyData;
      dataKey = "year";
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 sm:p-6 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <div className="flex-1">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1">
            User Trend
          </h3>
          <p className="text-sm text-gray-600">User Trend based on selected period</p>
        </div>
        <div className="relative">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="w-full sm:w-auto appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 text-sm"
          >
            <option value="Yearly">Yearly</option>
            <option value="Monthly">Monthly</option>
            <option value="Weekly">Weekly</option>
          </select>
         
        </div>
      </div>

      <div className="h-64 sm:h-80 mb-4 overflow-hidden">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            margin={{
              top: 20,
              right: window.innerWidth < 640 ? 10 : 30,
              left: window.innerWidth < 640 ? 10 : 20,
              bottom: 5,
            }}
          >
            <XAxis
              dataKey={dataKey}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: window.innerWidth < 640 ? 10 : 12 }}
              stroke="#6B7280"
              interval={window.innerWidth < 640 ? 1 : 0}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: window.innerWidth < 640 ? 10 : 12 }}
              stroke="#6B7280"
              width={window.innerWidth < 640 ? 30 : 60}
            />
            <Bar
              dataKey="newUser"
              fill="#8B5CF6"
              radius={[4, 4, 0, 0]}
              name="New User"
            />
            <Bar
              dataKey="oldUser"
              fill="#C4B5FD"
              radius={[4, 4, 0, 0]}
              name="Old User"
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
          <span className="text-sm text-gray-600">New User</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-purple-300 rounded-full"></div>
          <span className="text-sm text-gray-600">Old User</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-[#F5F4F7] rounded-lg p-4 transition-shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-1">
            New Users
          </h3>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            {chartData.reduce((sum, d) => sum + d.newUser, 0)}
          </p>
        </div>
        <div className="bg-[#F5F4F7] rounded-lg p-4 transition-shadow">
          <h3 className="text-sm font-medium text-gray-600 mb-1">
            Old Users
          </h3>
          <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
            {chartData.reduce((sum, d) => sum + d.oldUser, 0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserTrend;
