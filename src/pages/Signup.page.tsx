import React, { memo } from "react";
import { Link } from "react-router-dom";
import AuthHero from "../components/AuthHero";
interface Props {}
const Signup: React.FC<Props> = (props) => {
  return (
    <div className="w-1/2">
      This is signup page.If you already have an account, please
      <Link to="/login">
        <span className="text-blue-500">click here</span>{" "}
      </Link>
    </div>
  );
};
export default memo(Signup);
