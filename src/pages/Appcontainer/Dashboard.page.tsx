// import { useFormik } from "formik";
import React, { memo, useEffect, useState } from "react";

import { fetchGroups } from "../../api/group";
// import substitute from "../img/AuthImg.webp";
interface Props {}
const Dashboard: React.FC<Props> = (props) => {
  const [groups, setGroups] = useState<any>([]);
  const [keyword, setKeyword] = useState("");
  const [counter, setcounter] = useState(0);

  useEffect(() => {
    fetchGroups({
      status: "all-groups",
      query: keyword,
      limit: 7,
    }).then((data) => setGroups(data));
  }, [keyword]);

  return (
    <div className="flex-grow">
      <div className="flex">
        <div>
          <input
            type="text"
            id="search"
            className="rounded-full "
            value={keyword}
            placeholder={"search groups"}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            id="search"
            className="rounded-full "
            value={keyword}
            placeholder={"search groups"}
            onChange={(e) => setKeyword(e.target.value)}
          />
          <button type="submit" className="p-4 bg-blue-500">
            Search
          </button>
        </div>
      </div>
      {groups.map(function (group: any, index: number) {
        const className = index % 2 === 1 ? "bg-blue-100" : "bg-blue-300";
        return (
          <div className={"flex mr-4  " + className}>
            <img
              src={group.group_image_url}
              alt="#"
              className="object-cover w-12 h-12"
            />
            <div className="ml-2">
              <p className="text-base font-bold ">{group.name}</p>{" "}
              <p>{group.description}</p>
            </div>
          </div>
        );
      })}

      <button className="bg-yellow-600" onClick={() => setcounter(counter - 1)}>
        Decrease
      </button>
      {counter}
      <button className="bg-yellow-600" onClick={() => setcounter(counter + 1)}>
        Increase
      </button>
    </div>
  );
};
export default memo(Dashboard);
