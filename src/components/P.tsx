import React, { memo } from "react";
interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  className?: string;
}
const P: React.FC<Props> = (props) => {
  return (
    <p className={"text-sm font-semibold tracking-wider " + props.className}>
      {props.children}
    </p>
  );
};
export default memo(P);
