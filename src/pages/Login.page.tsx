import React, { memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { HiLockClosed } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { FaSpinner } from "react-icons/fa";
import { useFormik } from "formik";
import { FiLock } from "react-icons/fi";
import * as yup from "yup";
import Input from "../components/Input";
import MyToggle from "../components/toggle";
import H1 from "../components/H1";
import P from "../components/P";

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
      }, 30000);
    },
  });

  return (
    <div className="flex justify-center min-h-screen px-4 py-3 sm:px-6 lg:px-8">
      <div className="w-full max-w-md px-8">
        <div>
          <H1>
            Log In to{" "}
            <span className="font-semibold uppercase text-blue-cork ">
              cork
            </span>
          </H1>

          <p className="mt-2 mb-12 text-sm font-bold tracking-wider text-gray-800">
            New here ?{" "}
            <Link
              to="/signup"
              className="border-b text-blue-cork border-blue-cork"
            >
              Create an account
            </Link>
          </p>
        </div>
        <form onSubmit={myForm.handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />

          <div className="rounded-md ">
            <div className="relative pt-3 pb-6">
              <IoPersonOutline className="absolute z-20 w-6 h-6 top-5 text-blue-cork " />
              <Input
                error={myForm.errors.email}
                touched={myForm.touched.email}
                id="email"
                autoComplete="email"
                required
                {...myForm.getFieldProps("email")}
                placeholder="E-mail"
                className="pl-10"
              />
            </div>
            <div className="relative pt-3 pb-6">
              <FiLock className="absolute z-20 w-6 h-6 top-10 text-blue-cork" />
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
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <p>Show password</p>
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
                <MyToggle />
              </label>
            </div>
            <button
              disabled={!myForm.isValid}
              className="relative flex justify-center px-4 py-2 pl-8 text-sm font-medium text-white transition-shadow border border-transparent rounded-md shadow-button group bg-blue-cork hover:shadow-none focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {myForm.isSubmitting && (
                <FaSpinner className="absolute text-xl fill-current text-red animate-spin"></FaSpinner>
              )}
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <HiLockClosed
                  className="w-5 h-5 text-white group-focus-visible:invisible group-focus-visible:opacity-0"
                  aria-hidden="true"
                />
              </span>
              <span className="group-focus-visible:invisible group-focus-visible:opacity-0">
                Log in
              </span>
            </button>
          </div>

          <div>
            <div className="flex flex-col items-center mt-20 text-sm font-thin tracking-widest text-gray-check-box">
              <div>
                <input
                  type="checkbox"
                  id="logged-in"
                  className="w-5 h-5 text-white bg-pink-400 border-2 border-yellow-500 rounded-md focus:border-green-700"
                />
                <label htmlFor="logged-in" className="pl-4">
                  Keep me logged in
                </label>
              </div>
              <Link
                to="/forgot-password"
                className="mt-6 text-base font-bold tracking-widest text-blue-cork hover:text-indigo-500"
              >
                Forgot password?
              </Link>
            </div>
          </div>
        </form>
        <P className="mt-5">
          © 2020 All Rights Reserved. CORK is a product of Designreset. Cookie
          Preferences, Privacy, and Terms.
        </P>
      </div>
    </div>
  );
};
export default memo(Login);
