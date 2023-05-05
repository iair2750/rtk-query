import Button from "components/button/button";
import { FC } from "react";

interface DataItemProps {
  data?: Record<string, any>;
  onUpdate: (data: any) => void;
}

const DataItem: FC<DataItemProps> = ({ data, onUpdate }) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();
    const formData = Object.keys(data ?? {}).reduce((prev, key) => ({
      ...prev,
      [key]: (event.target as any)[key]?.value,
    }), {});
    onUpdate(formData);
  }

  return (
    <div>
      {
        data
          ? <form onSubmit={handleSubmit}>
            {
              Object.keys(data).map(key => (
                <div key={`item-${key}`} className="mb-4">
                  <span className="font-bold capitalize">{key}: </span>
                  <span>{data[key]}</span>
                  <input className="border border-black block" type="text" name={key} defaultValue={data[key]} />
                </div>
              ))
            }
              <Button type="submit">update</Button>
            </form>
          : <>No Data</>
      }
    </div>
  )
}

export default DataItem;
