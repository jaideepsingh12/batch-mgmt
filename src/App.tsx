import React, { Suspense, useEffect } from "react";
import { LS_AUTH_TOKEN } from "./api/base";
import { useAppSelector } from "./store";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import AppContainerPageLazy from "./pages/Appcontainer/AppContainer.lazy";
import NotFoundPage from "./pages/NotFoundPage";
import AuthPageLazy from "./pages/Auth/Auth.lazy";
import { meSelector } from "./selectors/auth.selectors";
import { authActions } from "./actions/Auth.actions";
import { me } from "./api/auth";

function App() {
  // const [user, setUser] = useState<User>();
  const user = useAppSelector(meSelector);
  const token = localStorage.getItem(LS_AUTH_TOKEN);

  useEffect(() => {
    if (!token || user) {
      return;
    }
    me().then((u) => authActions.fetch(u));
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
              "/groups/:groupId",
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
