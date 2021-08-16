import React, { memo } from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import DashboardPage from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import Recordings from "./Recordings.page";
import logo from "../../img/logo.svg";
import profile from "../../img/profile-16.jpeg";
import { HiSearch } from "react-icons/hi";
import GroupDetailPage from "./GroupDetailPage.page";

interface Props {}
const AppContainer: React.FC<Props> = () => {
  return (
    <div>
      <div className="bg-gray-800">
        <div className="flex items-center p-2 mx-7">
          <img src={logo} alt="#" className="w-8 h-8" />
          <h2 className="px-3 text-2xl font-bold text-gray-100 uppercase">
            cork
          </h2>
          <div className="flex ml-12 ">
            <HiSearch className="z-30 w-6 h-6 mt-2 fill-gray" />

            <input type="text" className="bg-gray-700 rounded-md -ml-7 w-80" />
          </div>
          <img src={profile} alt="#" className="w-8 h-8 ml-auto " />
        </div>
      </div>
      <div className="flex">
        <Sidebar />
        <Switch>
          <Route path="/dashboard">
            <DashboardPage></DashboardPage>
          </Route>
          <Route path="/groups/:groupId">
            <GroupDetailPage></GroupDetailPage>
          </Route>
          <Route path="/records">
            <Recordings></Recordings>
          </Route>
          <Route path="batch/:batchnumber/lecture/:lecturenumber">
            <LecturePage></LecturePage>
          </Route>
        </Switch>
      </div>
    </div>
  );
};
export default memo(AppContainer);
