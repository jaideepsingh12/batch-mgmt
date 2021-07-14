import React, { memo, useEffect } from "react";
interface Props {}
const Sidebar: React.FC<Props> = (props) => {
  console.log("sidebar rendering");
  useEffect(() => console.log("sidebar rendering for the first time"), []);
  return <div className="h-screen bg-gray-400 w-80"> this is sidebar</div>;
};
export default memo(Sidebar);
