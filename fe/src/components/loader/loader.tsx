import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/dist/query/react";
import { FC, ReactNode } from "react";

interface LoaderProps {
  children?: ReactNode;
  isLoading?: boolean;
  isFetching?: boolean;
  isError?: boolean;
  error?: FetchBaseQueryError | SerializedError;
}

const getErrorMessage = (error?: FetchBaseQueryError | SerializedError) => {
  if (!error) return;
  if ('status' in error) {
    return error.status;
  }
  return error.message;
}

const Loader: FC<LoaderProps> = ({children, isLoading, isFetching, isError, error}) => {  
  return (
    <>
      {isLoading && <div className="mb-1">Loading...</div>}
      {isFetching && <div className="mb-1">Fetching...</div>}
      {isError && <div className="mb-1">Error... {getErrorMessage(error)}</div>}
      {children}
    </>
  )
}

export default Loader;
