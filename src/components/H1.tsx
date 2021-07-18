import React, { Children, memo } from "react";
interface Props {}
const H1: React.FC<Props> = (props) => {
  return <h1 className="text-4xl font-medium text-gray-900 ">{Children}</h1>;
};
export default memo(H1);
