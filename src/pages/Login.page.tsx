import React, { memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { HiLockClosed } from "react-icons/hi";
import { FaSpinner } from "react-icons/fa";
import { useFormik } from "formik";
import * as yup from "yup";
import Input from "./Input";

interface Props {}
const Login: React.FC<Props> = (props) => {
  const history = useHistory();

  const myForm = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    }),

    onSubmit: (data) => {
      setTimeout(() => {
        console.log("form submitting", data);
        history.push("/dashboard");
      }, 5000);
    },
  });

  return (
    <div className="flex justify-center min-h-screen px-4 py-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h1 className="mt-6 text-4xl font-medium text-center text-gray-900 ">
            Log In to{" "}
            <span className="font-semibold uppercase text-blue-cork ">
              cork
            </span>
          </h1>
          <p className="mt-2 text-sm font-bold text-center text-gray-800">
            New here ?{" "}
            <Link
              to="#"
              className="font-medium border-b text-blue-cork border-blue-cork"
            >
              Create an account
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={myForm.handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />

          <div className="-space-y-px rounded-md shadow-sm">
            <Input
              error={myForm.errors.email}
              touched={myForm.touched.email}
              id="email"
              type="email"
              autoComplete="email"
              required
              {...myForm.getFieldProps("email")}
              placeholder="E-mail"
            />
            <Input
              className="mt-5 "
              error={myForm.errors.password}
              touched={myForm.touched.password}
              id="password"
              type="password"
              autoComplete="current-password"
              required
              {...myForm.getFieldProps("password")}
              placeholder="password"
            />
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
            <button
              disabled={!myForm.isValid}
              className="relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md group hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <HiLockClosed
                  className="w-5 h-5 text-indigo-500 group-hover:text-indigo-400"
                  aria-hidden="true"
                />
              </span>
              Sign in
            </button>
            {myForm.isSubmitting && (
              <FaSpinner className="ml-4 -mt-6 text-white fill-current animate-spin"></FaSpinner>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
export default memo(Login);
