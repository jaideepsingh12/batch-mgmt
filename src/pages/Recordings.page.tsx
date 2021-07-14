import React, { memo } from "react";
import { Link } from "react-router-dom";
interface Props {}
const Recordings: React.FC<Props> = (props) => {
  return (
    <>
      This is recordings page.{" "}
      <Link to="/dashboard">
        <span className="text-blue-500">Go to dashboard</span>{" "}
      </Link>
    </>
  );
};
export default memo(Recordings);
