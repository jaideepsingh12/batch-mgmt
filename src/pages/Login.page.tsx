import React, { memo, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { HiLockClosed } from "react-icons/hi";
import { FaSpinner } from "react-icons/fa";

interface Props {}
const Login: React.FC<Props> = (props) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({ email: false, password: false });
  const [submitting, setSubmitting] = useState(false);
  const history = useHistory();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setData({ ...data, [event.target.name]: event.target.value });

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) =>
    setTouched({ ...touched, [event.target.name]: true });

  let emailError = "";
  let passwordError = "";

  if (!data.email) emailError = "An email address is needed";
  else if (!data.email.endsWith("@gmail.com")) {
    emailError = "Please enter a valid email address";
  }

  if (!data.password) passwordError = "A password is needed";
  else if (data.password.length < 8) {
    passwordError = "Please enter a password with atleast 8 characters";
  }
  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-gray-50 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <img
            className="w-auto h-12 mx-auto"
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-sm text-center text-gray-600">
            Or{" "}
            <Link
              to="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              start your 14-day free trial
            </Link>
          </p>
        </div>
        <form
          className="mt-8 space-y-6"
          onSubmit={(event) => {
            event.preventDefault();
            if (emailError || passwordError) {
              console.log("invalid enrty");
              return;
            }

            setSubmitting(true);
            setTimeout(() => {
              console.log("started submitting");
              console.log(data);
              history.push("/dashboard");
            }, 2000);
          }}
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>

              <input
                id="email-address"
                name="email"
                type="email"
                value={data.email}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="email"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            {touched.email && <div className="text-red-700">{emailError}</div>}
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={data.password}
                onChange={handleChange}
                onBlur={handleBlur}
                autoComplete="current-password"
                required
                className="relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
            {touched.password && (
              <div className="text-red-700">{passwordError}</div>
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="block ml-2 text-sm text-gray-900"
              >
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link
                to="/forgot-password"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <HiLockClosed
                  className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </button>
            {submitting && (
              <FaSpinner className="ml-4 -mt-6 text-white fill-current animate-spin"></FaSpinner>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default memo(Login);
