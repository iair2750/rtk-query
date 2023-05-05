import { useState } from "react";

interface UsePaginationProps {
  page?: number;
  limit?: number;
}

const DEFAULT_PAGE = 1;
const DEFAULT_LIMIT = 5;

const usePagination = ({page = DEFAULT_PAGE, limit = DEFAULT_LIMIT}: UsePaginationProps = {}) => {
  const [_page, setPage] = useState(page);
  const [_limit, setLimit] = useState(limit);

  return {
    _page,
    _limit,
    setPage,
    setLimit
  }
}

export default usePagination;
