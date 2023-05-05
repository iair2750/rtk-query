import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:4000",
  prepareHeaders: (headers, api) => {
    headers.set("Content-Type", "application/json");
    /// set other headers
  },
});

const customBaseQuery = (
  args: string | FetchArgs,
  api: BaseQueryApi,
  extraOptions: {}
) => {
  if (Math.random() > 0.5) return { error: { message: "Random error" } };
  return baseQuery(args, api, extraOptions);
};

const myApi = createApi({
  baseQuery: customBaseQuery,
  keepUnusedDataFor: 0,
  endpoints: () => ({}),
  tagTypes: ["Users", "User"],
});

export default myApi;
