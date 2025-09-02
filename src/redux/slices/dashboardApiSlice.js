import { apiSlice } from "../apiSlice";

const BASE_URL = "http://localhost:5000";

export const dashboardSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardStats: builder.query({
      query: () => ({
        url: `${BASE_URL}/dashboard/dashboardStats`,
      }),
    }),
  }),
});

export const { useGetDashboardStatsQuery } = dashboardSlice;
