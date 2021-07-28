import React, { memo } from "react";
import { Route, Switch } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { User } from "../../modals/User";
import DashboardPage from "./Dashboard.page";
import LecturePage from "./Lecture.page";
import Recordings from "./Recordings.page";
interface Props {
  user: User;
}
const AppContainer: React.FC<Props> = ({ user }) => {
  return (
    <div className="flex">
      <Sidebar user={user} />
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
