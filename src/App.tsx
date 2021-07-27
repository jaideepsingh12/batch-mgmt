import React, { lazy, Suspense } from "react";
import { LS_AUTH_TOKEN } from "./api/base";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import AppContainerPageLazy from "./pages/Appcontainer/AppContainer.lazy";

// import AuthPage from "./pages/Auth.page";
import NotFoundPage from "./pages/NotFoundPage";
import AuthPageLazy from "./pages/Auth/Auth.lazy";

function App() {
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  return (
    <Suspense
      fallback={<div className="bg-red-500">AppContainer loading...</div>}
    >
      <Router>
        <Switch>
          <Route path="/" exact>
            {token ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>

          <Route path={["/login", "/signup"]} exact>
            {token ? <Redirect to="/dashboard" /> : <AuthPageLazy />}
          </Route>
          <Route
            path={[
              "/dashboard",
              "/records",
              "batch/:batchnumber/lecture/:lecturenumber",
            ]}
            exact
          >
            {token ? <AppContainerPageLazy /> : <Redirect to="/login" />}
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
}

export default App;
