import React, { InputHTMLAttributes, memo } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  touched?: boolean;
  error?: string;
}
const Input: React.FC<Props> = ({
  touched,
  error,
  className,
  placeholder,
  id,
  ...rest
}) => {
  return (
    <>
      <div>
        <label htmlFor={id} className="sr-only">
          {placeholder}
        </label>

        <input
          id={id}
          {...rest}
          className={
            "relative block w-full px-3 py-2 text-gray-900 placeholder-gray-input border-b border-solid border-gray-input focus:border-blue-cork rounded-none appearance-none rounded-t-md outline-none focus:ring-indigo-500 transition-all bg-white duration-200 ease-in-out focus:z-10 sm:text-sm border-0 " +
            className
          }
          placeholder={placeholder}
        />
      </div>
      {touched && <div className="text-red-700">{error}</div>}
    </>
  );
};
export default memo(Input);
