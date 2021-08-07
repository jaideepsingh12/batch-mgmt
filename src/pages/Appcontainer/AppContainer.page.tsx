import React, { memo } from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import DashboardPage from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import Recordings from "./Recordings.page";
import logo from "../../img/logo.svg";
interface Props {}
const AppContainer: React.FC<Props> = () => {
  return (
    <div>
      <div className="bg-gray-800">
        <div className="flex p-2 align-middle ml-7">
          <img src={logo} alt="#" className="w-8 h-8" />
          <h2 className="px-3 text-2xl font-bold text-gray-100 uppercase">
            cork
          </h2>
          <input type="text" className="ml-12" />
        </div>
      </div>
      <div className="flex">
        <Sidebar />
        <Switch>
          <Route path="/dashboard">
            <DashboardPage></DashboardPage>
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
