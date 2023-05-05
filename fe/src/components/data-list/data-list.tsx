import { Button } from "components";
import { FC } from "react";
import { Link } from "react-router-dom";

interface Pagination {
  _page: number;
  _limit: number;
  setPage: (value: number) => void;
  setLimit: (value: number) => void;
}

interface DataListProps {
  data?: Record<string, any>[];
  navigationKeys?: Record<string, string>;
  pagination?: Pagination;
}

const DataList: FC<DataListProps> = ({data = [], navigationKeys = {}, pagination}) => {
  return (
    <div>
      {
        pagination && (
          <div className="flex gap-10 items-center">
            <div className="flex gap-5 items-center">
              <Button onClick={() => pagination.setPage(pagination._page - 1)}>prev</Button>
              <span>Current page: {pagination._page}</span>
              <Button onClick={() => pagination.setPage(pagination._page + 1)}>next</Button>
            </div>
            <div>
              <span>Pagination limit: </span>
              <select value={pagination._limit} onChange={event => pagination.setLimit(parseInt(event.target.value))}>
                <option value='5'>5</option>
                <option value='10'>10</option>
                <option value='20'>20</option>
              </select>
            </div>
          </div>
        )
      }
      {
        data.length === 0
          ? <>No Data</>
          : data.map((item, index) => (
              <div key={`item-${index}`} className="py-2 border-b-2 last-of-type:border-b-0">
                {Object.keys(item).map(key => (
                  <div key={`item-${index}-${key}`}>
                    <span className="font-bold capitalize">{key}: </span>
                    {
                      navigationKeys[key] !== undefined
                        ? <Link
                            to={navigationKeys[key] + item[key]}
                            className="text-blue-500 underline underline-offset-2 visited:text-blue-950"
                          >
                            {item[key]}
                          </Link>
                        : <span>{item[key]}</span>
                    }
                  </div>
                  ))
                }
              </div>
            ))
      }
    </div>
  )
}

export default DataList;
