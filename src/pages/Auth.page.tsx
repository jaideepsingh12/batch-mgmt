import React, { memo } from "react";
import { Switch, Route } from "react-router-dom";
import AuthHero from "../components/AuthHero";
import LoginPage from "./Login.page";
import SignupPage from "./Signup.page";
interface Props {}
const AuthPage: React.FC<Props> = (props) => {
  return (
    <div className="grid lg:grid-cols-2">
      <Switch>
        <Route path="/login">
          <LoginPage></LoginPage>
        </Route>
        <Route path="/signup">
          <SignupPage></SignupPage>
        </Route>
      </Switch>
      <AuthHero />
    </div>
  );
};
export default memo(AuthPage);
