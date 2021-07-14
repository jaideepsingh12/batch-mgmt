import React from "react";
import { Link } from "react-router-dom";
interface Props {}
const Login: React.FC<Props> = (props) => {
  return (
    <div>
      this is the login page. If you dont have an account,
      <Link to="/signup">
        <span className="text-blue-500">click here</span>{" "}
      </Link>
    </div>
  );
};
export default Login;
