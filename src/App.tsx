import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import AppContainer from "./pages/AppContainer";

import AuthPage from "./pages/Auth.page";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/login"></Redirect>
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
      </Switch>
    </Router>
  );
}

export default App;
