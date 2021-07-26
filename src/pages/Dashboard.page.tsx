import { useFormik } from "formik";
import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchGroups } from "../api";
interface Props {}
const Dashboard: React.FC<Props> = (props) => {
  const [groups, setGroups] = useState<any>([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    fetchGroups({ status: "all-groups", query: keyword }).then((data) =>
      setGroups(data)
    );
  }, [keyword]);

  return (
    <div>
      <input
        type="text"
        id="search"
        className="rounded-full width-full"
        value={keyword}
        placeholder={"search groups"}
        onChange={(e) => setKeyword(e.target.value)}
      />
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
    </div>
  );
};
export default memo(Dashboard);
