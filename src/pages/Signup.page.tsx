import React, { memo } from "react";
import { Link } from "react-router-dom";
interface Props {}
const Signup: React.FC<Props> = (props) => {
  return (
    <div>
      This is signup page.If you already have an account, please
      <Link to="/login">
        <span className="text-blue-500">click here</span>{" "}
      </Link>
      <Link to="/dashboard">
        <span className="text-blue-500">Go to dashboard</span>{" "}
      </Link>
    </div>
  );
};
export default memo(Signup);
