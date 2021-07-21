import React, { memo } from "react";
interface Props {
  theme?: "primary" | "warning" | "success" | "error";
}
const Alert: React.FC<Props> = (props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  const alertTheme = (theme: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    2 + 4;
  };
  console.log(alertTheme);

  return <div>this is the new alert.</div>;
};
export default memo(Alert);
