import React, { ButtonHTMLAttributes, memo } from "react";
import { IconType } from "react-icons";
import { HiLockClosed } from "react-icons/hi";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "primary" | "secondary";
  children?: string;

  Icon?: IconType;
}
const Button: React.FC<Props> = ({
  children,
  className,
  Icon,
  theme,
  type,
  ...rest
}) => {
  const themeClasses = theme === "primary" ? "bg-blue-cork" : "bg-gray-600";

  return (
    <button
      type={type}
      {...rest}
      className={
        "relative flex justify-center px-4 py-2 pl-8 text-sm font-medium text-white transition-shadow border border-transparent rounded-md shadow-button group  hover:shadow-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 " +
        themeClasses +
        " " +
        className
      }
    >
      {Icon && (
        <span className="absolute inset-y-0 left-0 flex items-center pl-3">
          <Icon className="w-5 h-5 text-white " aria-hidden="true" />
        </span>
      )}
      <span className="">{children}</span>
    </button>
  );
};
Button.defaultProps = { Icon: HiLockClosed };
export default memo(Button);
