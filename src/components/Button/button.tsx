import React, { ButtonHTMLAttributes, memo } from "react";
import { IconType } from "react-icons";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: "primary" | "secondary";
  children: string;
  Icon?: IconType;
}
const Button: React.FC<Props> = ({
  children,
  className,
  Icon,
  theme,
  ...rest
}) => {
  const themeClasses = theme === "primary" ? "bg-blue-cork" : "bg-gray-600";

  return (
    <button
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
          <Icon
            className="w-5 h-5 text-white group-focus-visible:invisible group-focus-visible:opacity-0 "
            aria-hidden="true"
          />
        </span>
      )}
      <span className="group-focus-visible:invisible group-focus-visible:opacity-0">
        {children}
      </span>
    </button>
  );
};
Button.defaultProps = { theme: "primary" };
export default memo(Button);
