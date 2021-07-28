import React, { memo, useEffect } from "react";
import Button from "./Button/button";
import { logout } from "../api/auth";
import { User } from "../modals/User";

interface Props {
  user: User;
}
const Sidebar: React.FC<Props> = ({ user }) => {
  console.log("sidebar rendering");
  useEffect(() => console.log("sidebar rendering for the first time"), []);
  return (
    <div>
      <div className="h-screen px-8 bg-gray-400 ">
        {" "}
        <div className="bg-red-500">{user.first_name}</div>
        <Button
          theme="secondary"
          onClick={() => {
            logout();
            window.location.href = "/login";
          }}
        >
          Logout
        </Button>
      </div>
    </div>
  );
};
export default memo(Sidebar);
