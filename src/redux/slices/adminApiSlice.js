import { apiSlice } from "../apiSlice";

const BASE_URL = "http://localhost:5000";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/AdminAuth/signin`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/AdminAuth/signup`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `${BASE_URL}/AdminAuth/signout`,
        method: "GET",
      }),
    }),
    profile: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/AdminAuth/profile`,
        method: "PUT",
        body: data,
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: `${BASE_URL}/AdminAuth/change-password`,
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useLogoutMutation,
  useProfileMutation,
  useChangePasswordMutation,
} = userApiSlice;
