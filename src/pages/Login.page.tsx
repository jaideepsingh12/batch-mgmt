import React from "react";
import { Link } from "react-router-dom";
import AuthHero from "../components/AuthHero";
interface Props {}
const Login: React.FC<Props> = (props) => {
  return (
    <div className="w-1/2">
      this is the login page. If you dont have an account,
      <Link to="/signup">
        <span className="text-blue-500">click here</span>{" "}
      </Link>
      <Link to="/dashboard">
        <span className="text-blue-500">Go to dashboard</span>{" "}
      </Link>
    </div>
  );
};
export default Login;
