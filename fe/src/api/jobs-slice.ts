import myApi from "./my-api";
import { Job } from "./types";

const jobsSlice = myApi.injectEndpoints({
  endpoints: (build) => ({
    getJobs: build.query<Job[], void>({
      query: () => ({
        url: "jobs",
        method: "GET",
      }),
      onQueryStarted: (args, { dispatch, queryFulfilled }) => {
        queryFulfilled.then((result) =>
          result.data.forEach((job) => {
            dispatch(jobsSlice.util.upsertQueryData("getJobById", job.id, job));
          })
        );
      },
    }),
    getJobById: build.query<Job, string>({
      query: (id) => `jobs/${id}`,
    }),
  }),
});

export const { useGetJobsQuery, useLazyGetJobsQuery, useGetJobByIdQuery } =
  jobsSlice;
