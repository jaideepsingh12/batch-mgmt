import React, { Suspense, useEffect } from "react";
import { LS_AUTH_TOKEN } from "./api/base";
import { useDispatch } from "react-redux";
import { meFetchedAction, uiSidebarToggle, useAppSelector } from "./store";

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

import { me } from "./api/auth";

function App() {
  // const [user, setUser] = useState<User>();
  const user = useAppSelector((state) => state.me);
  const token = localStorage.getItem(LS_AUTH_TOKEN);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!token || user) {
      return;
    }
    me().then((u) => dispatch(meFetchedAction(u)));
  }, []);
  useEffect(() => {
    setTimeout(() => {
      console.log("sidebar toggle dispatched");

      dispatch(uiSidebarToggle(false));
    }, 8000);
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
  );
}

export default App;
