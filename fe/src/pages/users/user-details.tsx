import { useGetUserByIdQuery, useUpdateUserMutation } from "api";
import { Loader } from "components";
import DataItem from "components/data-item/data-item";
import { FC } from "react";
import { useParams } from "react-router-dom";

const UserDetailsPage: FC = () => {
  const { id = '' } = useParams();
  const {data, isLoading, isFetching, isError, error} = useGetUserByIdQuery(id);
  const [updateUser, { isLoading: isUpdating }] = useUpdateUserMutation();
  
  return (
    <Loader isLoading={isLoading || isUpdating} isFetching={isFetching} isError={isError} error={error}>
      <DataItem data={data} onUpdate={updateUser} />
    </Loader>
  )
}

export default UserDetailsPage;
