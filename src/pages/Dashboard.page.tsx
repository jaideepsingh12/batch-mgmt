import React, { memo } from "react";
import { Link } from "react-router-dom";
interface Props {}
const Dashboard: React.FC<Props> = (props) => {
  return (
    <>
      This is Dashboard page{" "}
      <Link to="/records">
        <span className="text-blue-500">Go to recordings page</span>{" "}
      </Link>
    </>
  );
};
export default memo(Dashboard);
