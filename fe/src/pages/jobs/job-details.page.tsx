import { FC } from "react";
import { Loader } from "components";
import { useGetJobByIdQuery } from "api";
import { useParams } from "react-router";
import DataItem from "components/data-item/data-item";

const JobDetailsPage: FC = () => {
  const {id= ''} = useParams();
  const {data, isLoading, isFetching, isError, error } = useGetJobByIdQuery(id);

  return (
    <Loader isLoading={isLoading} isFetching={isFetching} isError={isError} error={error}>
      <DataItem data={data} onUpdate={() => {}} />
    </Loader>
  )
}

export default JobDetailsPage;
