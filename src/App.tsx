import React from "react";
import Login from "./pages/Login.page";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoginPage from "./pages/Login.page";
import SignupPage from "./pages/Signup.page";
import DashboardPage from "./pages/Dashboard.page";
import RecordingsPage from "./pages/Recordings.page";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login"></Redirect>
        </Route>
        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>
        <Route path="/signup">
          <SignupPage></SignupPage>
        </Route>
        <Route path="/dashboard">
          <DashboardPage></DashboardPage>
        </Route>
        <Route path="/records">
          <RecordingsPage></RecordingsPage>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
