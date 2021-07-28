// import { useFormik } from "formik";
import React, { memo, useEffect, useState } from "react";

import { fetchGroups } from "../../api/group";
// import substitute from "../img/AuthImg.webp";
interface Props {}
const Dashboard: React.FC<Props> = (props) => {
  const [groups, setGroups] = useState<any>([]);
  const [keyword, setKeyword] = useState("");
  const [offset, setoffset] = useState(0);
  let limit = 5;
  const imgError = (e: any) => {
    e.target.onerror = null;
    e.target.src = "https://www.snarkypuppy.com/press/logos/logo-pup.png";
  };

  useEffect(() => {
    fetchGroups({
      status: "all-groups",
      query: keyword,
      limit: limit,
      offset: offset,
    }).then((data) => setGroups(data));
  }, [keyword, offset, limit]);

  return (
    <div className="flex-grow">
      <div className="flex">
        <div>
          <input
            type="text"
            id="autoSearch"
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

      {groups.map(function (group: any, index: number, groups: []) {
        const className = index % 2 === 1 ? "bg-blue-100" : "bg-blue-300";
        return (
          <div className={"flex mr-4 px-3 py-3 " + className}>
            <img
              src={group.group_image_url}
              onError={(e) => {
                imgError(e);
              }}
              alt="#"
              className="object-cover w-16 h-16"
            />

            <div className="ml-6">
              <p className="text-base font-bold ">{group.name}</p>{" "}
              <p className="mt-4">{group.description}</p>
            </div>
          </div>
        );
      })}

      <button
        className="bg-yellow-600"
        onClick={() => setoffset(offset > 0 ? offset - 6 : 0)}
      >
        Previous
      </button>

      <button
        className="bg-yellow-600"
        onClick={() => setoffset(groups.length === limit ? offset + 6 : offset)}
      >
        Next
      </button>
    </div>
  );
};
export default memo(Dashboard);
