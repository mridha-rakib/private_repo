import { apiSlice } from "../apiSlice";

export const dashboardSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDashboardStats: builder.query({
      query: () => ({
        url: `/dashboard/dashboardStats`,
      }),
    }),
  }),
});

export const { useGetDashboardStatsQuery } = dashboardSlice;
