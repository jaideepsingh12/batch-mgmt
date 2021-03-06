import React, { memo } from "react";
import { FaSpinner } from "react-icons/fa";
import { FiLock } from "react-icons/fi";
import { HiLockClosed } from "react-icons/hi";
import { IoPersonOutline } from "react-icons/io5";
import { Link, useHistory } from "react-router-dom";
import H1 from "../../components/H1";
import Input from "../../components/Input";
import MyToggle from "../../components/toggle";
import { useFormik } from "formik";
import * as yup from "yup";
import P from "../../components/P";

interface Props {}
const Signup: React.FC<Props> = (props) => {
  const history = useHistory();
  const myForm = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object().shape({
      username: yup.string().required().min(3),
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    }),

    onSubmit: (data) => {
      setTimeout(() => {
        console.log("form submitting", data);
        history.push("/dashboard");
      }, 3000);
    },
  });
  return (
    <div className="flex justify-center min-h-screen px-4 py-3 sm:px-6 lg:px-8">
      <div className="w-full max-w-md px-8">
        <div>
          <H1>Get started with a free account</H1>
          <p className="mt-2 mb-12 text-sm font-bold tracking-wider text-gray-800">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium border-b text-blue-cork border-blue-cork"
            >
              Log in
            </Link>
          </p>
        </div>
        <form onSubmit={myForm.handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />

          <div className="rounded-md ">
            <div className="relative pt-3 pb-6">
              <IoPersonOutline className="absolute z-20 w-6 h-6 top-5 text-blue-cork " />
              <Input
                // error={myForm.errors.username}
                // touched={myForm.touched.username}
                id="username"
                autoComplete="username"
                required
                {...myForm.getFieldProps("username")}
                placeholder="Username"
                className="pl-10"
              />
            </div>
            <div className="relative pt-3 pb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="absolute z-20 w-6 h-6 top-5 text-blue-cork "
              >
                <circle cx="12" cy="12" r="4"></circle>
                <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
              </svg>

              {/* <IoPersonOutline className="absolute z-20 w-6 h-6 top-5 text-blue-cork " /> */}
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
              <FiLock className="absolute z-20 w-6 h-6 top-5 text-blue-cork" />
              <Input
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
          <div className="mt-2 font-thin tracking-widest text-gray-check-box ">
            <input
              type="checkbox"
              id="logged-in"
              className="w-5 h-5 border-2 rounded-md outline-none border-gray-check-box text-blue focus:border-blue-cork focus:ring-0"
            />
            <label htmlFor="logged-in" className="pl-4 ">
              I agree to the terms and conditions
            </label>
          </div>
          <div className="flex items-center justify-between mt-5">
            <div className="flex items-center">
              <p className="pb-1 font-semibold">Show password</p>
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="hidden w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500 "
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
              <span className="pt-1 pl-1 group-focus-visible:invisible group-focus-visible:opacity-0">
                Get Started
              </span>
            </button>
          </div>
        </form>
        <P className="mt-20">
          ?? 2020 All Rights Reserved. CORK is a product of Designreset. Cookie
          Preferences, Privacy, and Terms.
        </P>
      </div>
    </div>
  );
};
export default memo(Signup);
