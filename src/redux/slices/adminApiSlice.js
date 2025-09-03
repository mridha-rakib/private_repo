import { apiSlice } from "../apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (data) => ({
        url: `/AdminAuth/signin`,
        method: "POST",
        body: data,
      }),
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `/AdminAuth/signup`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: () => ({
        url: `/AdminAuth/signout`,
        method: "GET",
      }),
    }),
    profile: builder.mutation({
      query: (data) => ({
        url: `/AdminAuth/profile`,
        method: "PUT",
        body: data,
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: `/AdminAuth/change-password`,
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
