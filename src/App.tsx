import React from "react";
import { LS_LOGIN_TOKEN } from "./api";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import AppContainer from "./pages/AppContainer";

import AuthPage from "./pages/Auth.page";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
        </Route>

        <Route path={["/login", "/signup"]} exact>
          <AuthPage />
        </Route>
        <Route
          path={[
            "/dashboard",
            "/records",
            "batch/:batchnumber/lecture/:lecturenumber",
          ]}
          exact
        >
          <AppContainer />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
