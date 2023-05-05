import myApi from "./my-api";
import { User } from "./types";

interface GetUsersParams {
  _page?: number;
  _limit?: number;
}

const usersSlice = myApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<User[], GetUsersParams>({
      query: (params) => {
        const urlParams = Object.entries(params).reduce(
          (prev, entry) => `${prev}${entry[0]}=${entry[1] ?? ""}&`,
          ""
        );
        return `users?${urlParams}`;
      },
      providesTags: (result) =>
        result
          ? [
              "Users",
              ...result.map(({ id }) => ({ type: "Users" as const, id })),
            ]
          : ["Users"],
      onQueryStarted: (params, { dispatch, queryFulfilled }) => {
        queryFulfilled.then((users) => {
          users.data.forEach((user) => {
            dispatch(
              usersSlice.util.upsertQueryData("getUserById", user.id, user)
            );
          });
        });
      },
    }),

    getUserById: build.query<User, string>({
      query: (id) => `users/${id}`,
      providesTags: (user) =>
        user ? [{ type: "User", id: user.id }] : ["User"],
    }),

    updateUser: build.mutation<undefined, User>({
      query: (user) => ({
        url: `users/${user.id}`,
        method: "PUT",
        body: user,
      }),
      onQueryStarted: (user, { dispatch, queryFulfilled }) => {
        const patchResult = dispatch(
          usersSlice.util.updateQueryData("getUserById", user.id, (draft) => {
            Object.assign(draft, user);
          })
        );
        queryFulfilled.catch(() => patchResult.undo());
      },
      invalidatesTags: (result, err, { id }) => [{ type: "Users", id }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useLazyGetUsersQuery,
  useGetUserByIdQuery,
  useUpdateUserMutation,
} = usersSlice;
