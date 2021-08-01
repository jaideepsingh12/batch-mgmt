import React, { memo, useContext } from "react";
import Button from "./Button/button";
import { logout } from "../api/auth";
import { User } from "../modals/User";
import AppContext from "../App.context";

interface Props {}
const Sidebar: React.FC<Props> = () => {
  const { user } = useContext(AppContext);

  return (
    <div>
      <div className="h-screen px-8 bg-gray-400 ">
        {" "}
        <div className="bg-red-500">{user!.first_name}</div>
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
