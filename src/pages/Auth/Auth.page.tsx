import React, { memo } from "react";
import { Switch, Route } from "react-router-dom";
import AuthHero from "../../components/AuthHero";
import { User } from "../../modals/User";
import LoginPage from "./Login.page";
import SignupPage from "./Signup.page";
interface Props {
  onLogin: (user: User) => void;
}
const AuthPage: React.FC<Props> = (props) => {
  return (
    <div className="grid lg:grid-cols-2">
      <Switch>
        <Route path="/login">
          <LoginPage onLogin={props.onLogin}></LoginPage>
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
