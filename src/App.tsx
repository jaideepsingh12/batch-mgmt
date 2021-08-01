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
import AppContext from "./App.context";

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
    <AppContext.Provider value={{ user, setUser }}>
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
                <AuthPageLazy /*onLogin={setUser}*/ /> //onLogin takes a function that takes User as input. Since SetUser also takes either User or a function that takes User, therefore we can directly pass setUser also. So onLogin={setUser} will also be valid.
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
              {user ? <AppContainerPageLazy /> : <Redirect to="/login" />}
            </Route>
            <Route>
              <NotFoundPage />
            </Route>
          </Switch>
        </Router>
      </Suspense>
    </AppContext.Provider>
  );
}

export default App;
