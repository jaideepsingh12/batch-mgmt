import React, { memo } from "react";
interface Props {
  theme?: "Primary" | "Warning" | "Success" | "Error";
  children?: string;
}
const Alert: React.FC<Props> = ({ theme, children }) => {
  let className: string;
  if (theme === "Primary") {
    className = "text-blue-700 bg-blue-100";
  } else if (theme === "Warning") {
    className = "text-red-700 bg-red-100";
  } else if (theme === "Error") {
    className = "text-gray-700 bg-gray-100";
  } else {
    className = "text-green-700 bg-green-100";
  }

  return (
    <div className={"px-4 py-2  " + className}>
      <span>{theme}! </span>
      {children}
    </div>
  );
};
Alert.defaultProps = { theme: "Primary" };
export default memo(Alert);
