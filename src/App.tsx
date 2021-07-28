import React, { lazy, Suspense, useEffect, useState } from "react";
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
import { User } from "./modals/User";
import { me } from "./api/auth";

function App() {
  const [user, setUser] = useState<User>();
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  useEffect(() => {
    if (!token || user) {
      return;
    }
    me().then((u) => setUser(u));
  }, []);
  if (!user && token) {
    return <div>loading...</div>;
  }

  return (
    <Suspense
      fallback={<div className="bg-red-500">AppContainer loading...</div>}
    >
      <Router>
        <Switch>
          <Route path="/" exact>
            {user ? <Redirect to="/dashboard" /> : <Redirect to="/login" />}
          </Route>

          <Route path={["/login", "/signup"]} exact>
            {user ? (
              <Redirect to="/dashboard" />
            ) : (
              <AuthPageLazy onLogin={(u) => setUser(u)} />
            )}
          </Route>
          <Route
            path={[
              "/dashboard",
              "/records",
              "batch/:batchnumber/lecture/:lecturenumber",
            ]}
            exact
          >
            {user ? (
              <AppContainerPageLazy user={user!} />
            ) : (
              <Redirect to="/login" />
            )}
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
