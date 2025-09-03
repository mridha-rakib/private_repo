import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query/react";

// const BASE_URL = "https://humor-junk-menu-sleeping.trycloudflare.com";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://humor-junk-menu-sleeping.trycloudflare.com",
  credentials: "include",
  prepareHeaders: (headers) => {
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: ["User"],
  // eslint-disable-next-line no-unused-vars
  endpoints: (builder) => ({}),
});
