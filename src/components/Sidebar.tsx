import React, { memo } from "react";
import Button from "./Button/button";
import { logout } from "../api/auth";

import { useAppSelector } from "../store";

interface Props {}
const Sidebar: React.FC<Props> = () => {
  // const { user } = useContext(AppContext);
  const userFirstName = useAppSelector((state) => state.me?.first_name);

  return (
    <div>
      <div className="h-screen px-8 bg-gray-400 ">
        {" "}
        <div className="bg-red-500">{userFirstName}</div>
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
