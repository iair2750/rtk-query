import { FC } from "react";
import { DataList, Loader } from "components";
import { useGetUsersQuery } from "api/users-slice";
import usePagination from "hooks/use-pagination";

const UsersPage: FC = () => {
  const pagination = usePagination();
  const {_page, _limit} = pagination;

  const { data, isLoading, isFetching, isError, error } = useGetUsersQuery({
    _page,
    _limit
  });

  return (
    <Loader isLoading={isLoading} isFetching={isFetching} isError={isError} error={error}>
      <DataList
        data={data}
        navigationKeys={{ id: '', jobId: '/jobs/', avatar: '' }}
        pagination={pagination}
      />
    </Loader>
  )
}

export default UsersPage;
