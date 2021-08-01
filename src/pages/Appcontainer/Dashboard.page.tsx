// import { useFormik } from "formik";
import React, { memo, useEffect, useState } from "react";
import { fetchGroups } from "../../api/group";
import Button from "../../components/Button/button";
import { HiSearch } from "react-icons/hi";

interface Props {}
const Dashboard: React.FC<Props> = (props) => {
  const [groups, setGroups] = useState<any>([]);
  const [keyword, setKeyword] = useState("");
  const [keyword2, setKeyword2] = useState("");
  const [offset, setoffset] = useState(0);
  const [data, setData] = useState("");
  const limit = 5;
  const imgError = (e: any) => {
    e.target.onerror = null;
    e.target.src = "https://www.snarkypuppy.com/press/logos/logo-pup.png";
  };
  const handlesubmit = (e: any) => {
    e.preventDefault();
    setData(e.target.firstChild.value);
    console.log(e.target.firstChild.value);
  };

  useEffect(() => {
    fetchGroups({
      status: "all-groups",
      query: data,
      limit: limit,
      offset: offset,
    }).then((data) => setGroups(data));
  }, [data, offset, limit]);

  return (
    <div className="flex-grow ">
      <div className="flex justify-around mt-8 mb-4">
        <div className="flex-1">
          <input
            type="text"
            id="autoSearch"
            className="w-4/5 rounded-full "
            value={keyword}
            placeholder={"search groups"}
            onChange={(e) => setKeyword(e.target.value)}
          />
        </div>
        <form onSubmit={handlesubmit} className="flex flex-1 align-middle">
          <input
            type="text"
            id="search"
            className="w-4/5 rounded-full "
            value={keyword2}
            placeholder={"search groups"}
            onChange={(e) => setKeyword2(e.target.value)}
          />
          <button type="submit" className="-ml-8">
            <HiSearch className="w-6 h-6" />
          </button>
        </form>
      </div>

      {groups.map(function (group: any, index: number, groups: []) {
        const className = index % 2 === 1 ? "bg-blue-100" : "bg-blue-300";
        return (
          <div className={"flex mr-4 px-3 py-3 " + className}>
            <img
              src={group.group_image_url}
              onError={(e) => imgError(e)}
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

      <div className="flex justify-around mt-4 ">
        <Button
          className="bg-red-500"
          onClick={() => setoffset(offset > 0 ? offset - 6 : 0)}
        >
          Previous
        </Button>

        <Button
          className="bg-red-500"
          onClick={() =>
            setoffset(groups.length === limit ? offset + 6 : offset)
          }
        >
          Next
        </Button>
      </div>
    </div>
  );
};
export default memo(Dashboard);
