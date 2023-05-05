import { FC } from "react";
import { DataList, Loader } from "components";
import { useGetJobsQuery } from "api";

const JobsPage: FC = () => {
  const {data, isLoading, isFetching, isError, error } = useGetJobsQuery();

  return (
    <Loader isLoading={isLoading} isFetching={isFetching} isError={isError} error={error}>
      <DataList data={data} navigationKeys={{id: ''}} />
    </Loader>
  )
}

export default JobsPage;
