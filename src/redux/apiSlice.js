import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

const BASE_URL = "http://localhost:5000";

const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  credentials: "include",
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});
