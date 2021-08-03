import React, { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { FaSpinner } from "react-icons/fa";
import { useFormik } from "formik";
import { FiLock } from "react-icons/fi";
import * as yup from "yup";
import Input from "../../components/Input";
import MyToggle from "../../components/toggle";
import H1 from "../../components/H1";
import P from "../../components/P";
import Button from "../../components/Button/button";
import { login } from "../../api/auth";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { meFetchedAction, uiSidebarToggle } from "../../store";

interface Props {}
const Login: React.FC<Props> = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const myForm = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
    }),

    onSubmit: (data) => {
      login(data).then((u) => {
        dispatch(meFetchedAction(u));
        history.push("/dashboard");
      });
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
                type="email"
                autoComplete="email"
                required
                {...myForm.getFieldProps("email")}
                placeholder="E-mail"
                className="pl-10"
              />
            </div>
            <div className="relative pt-3 pb-6 mb-2">
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

          <div className="relative flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="hidden w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              />
              <label
                htmlFor="remember-me"
                className="block ml-2 text-sm text-gray-900"
              >
                {" "}
                <MyToggle />
              </label>
            </div>
            <Button theme="primary">Sign in </Button>
            {myForm.isSubmitting && (
              <FaSpinner className="absolute bottom-0 right-0 text-xl fill-blue text-red animate-spin"></FaSpinner>
            )}
          </div>

          <div>
            <div className="flex flex-col items-center mt-16 text-sm font-thin tracking-widest text-gray-check-box">
              <div>
                <input
                  type="checkbox"
                  id="logged-in"
                  className="w-5 h-5 border-2 rounded-md outline-none border-gray-check-box text-blue focus:border-blue-cork focus:ring-0"
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
        <P className="mt-20">
          © 2020 All Rights Reserved. CORK is a product of Designreset. Cookie
          Preferences, Privacy, and Terms.
        </P>
      </div>
    </div>
  );
};
export default memo(Login);
