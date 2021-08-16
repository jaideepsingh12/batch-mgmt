// import { useFormik } from "formik";
import React, { memo, useEffect, useState } from "react";
import Button from "../../components/Button/button";
import { HiSearch } from "react-icons/hi";
import { useAppSelector } from "../../store";
import { Group } from "../../modals/Group";

import {
  groupsLoadingSelector,
  groupQuerySelector,
  groupsFetchedSelector,
} from "../../selectors/groups.selectors";
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { queryChangedAction } from "../../actions/groups.actions";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

interface Props {}
const Dashboard: React.FC<Props> = (props) => {
  const [keyword2, setKeyword2] = useState("");
  const [offset, setoffset] = useState(0);
  const [data, setData] = useState("");
  const limit = 7;
  const imgError = (e: any) => {
    e.target.onerror = null;
    e.target.src = "https://www.snarkypuppy.com/press/logos/logo-pup.png";
  };
  const handlesubmit = (e: any) => {
    e.preventDefault();
    setData(e.target.firstChild.value);
    console.log(e.target.firstChild.value);
  };
  // const groups = useAppSelector((state) => state.groups);
  const query = useAppSelector(groupQuerySelector);
  const loading = useAppSelector(groupsLoadingSelector);
  const groups = useAppSelector(groupsFetchedSelector);

  const dispatch = useDispatch();
  const history = useHistory();

  return (
    <div className="flex-grow ">
      <div className="relative flex justify-around mt-8 mb-4">
        <div className="flex-1">
          <input
            type="text"
            id="autoSearch"
            className="w-4/5 rounded-full "
            value={query}
            placeholder={"search groups"}
            onChange={(e) => dispatch(queryChangedAction(e.target.value))}
          />
        </div>
        {loading && (
          <FaSpinner className="absolute bottom-0 text-xl left-1/3 fill-red text-red animate-spin"></FaSpinner>
        )}
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

      {groups.map(function (group: Group, index: number, groups: Group[]) {
        const className = index % 2 === 1 ? "bg-blue-100" : "bg-blue-300";
        return (
          <div key={group.id} className={"flex mr-4 px-3 py-3 " + className}>
            <Link to={"/groups/" + group.id}>
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
            </Link>
          </div>
        );
      })}
      {!loading && groups.length === 0 && (
        <img
          src="https://d33v4339jhl8k0.cloudfront.net/docs/assets/5923ee3b0428634b4a335ad3/images/5ff84209b5efec03af3f13f1/file-oVkLMSoszt.png"
          alt="#"
        />
      )}

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
