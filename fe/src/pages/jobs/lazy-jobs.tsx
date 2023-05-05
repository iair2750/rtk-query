import { FC } from "react";
import { DataList, Loader } from "components";
import { useLazyGetJobsQuery } from "api";

const JobsPage: FC = () => {
  const [fetch, {data, isLoading, isFetching, isError, error}] = useLazyGetJobsQuery();

  return (
    <>
      <button className="bg-red-300 px-2 py-1 rounded mb-1" onClick={() => {fetch()}}>Fetch Jobs</button>
      <Loader isLoading={isLoading} isFetching={isFetching} isError={isError} error={error}>
      <DataList data={data} />
      </Loader>
    </>
  )
}

export default JobsPage;
