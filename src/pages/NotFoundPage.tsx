import React, { memo } from "react";
interface Props {}
const NotFound: React.FC<Props> = (props) => {
  return <div className="bg-red-400">This page cant be found here.</div>;
};
export default memo(NotFound);
