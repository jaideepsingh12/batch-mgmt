import React, { memo } from "react";
interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  className?: string;
}
const H1: React.FC<Props> = (props) => {
  return (
    <h1 className={"font-medium text-h1 leading-tight " + props.className}>
      {props.children}
    </h1>
  );
};
export default memo(H1);
