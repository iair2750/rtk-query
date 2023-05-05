import { FC } from "react";
import { DataList, Loader } from "components";
import { useLazyGetUsersQuery } from "api/users-slice";

const UsersPage: FC = () => {
  const [fetch, { data, isLoading, isFetching, isError, error }] = useLazyGetUsersQuery();

  return (
    <>
      <button className="bg-red-300 px-2 py-1 rounded mb-1" onClick={() => fetch({})}>Fetch Users</button>
      <Loader isLoading={isLoading} isFetching={isFetching} isError={isError} error={error}>
        <DataList data={data} navigationKeys={{ id: '/users/', jobId: '/jobs/', avatar: '' }} />
      </Loader>
    </>
  )
}

export default UsersPage;
