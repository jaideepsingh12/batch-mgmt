import React, { memo } from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import DashboardPage from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import Recordings from "./Recordings.page";
interface Props {}
const AppContainer: React.FC<Props> = (props) => {
  return (
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
  );
};
export default memo(AppContainer);
