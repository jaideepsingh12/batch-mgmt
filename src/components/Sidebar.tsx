import React, { memo, useEffect } from "react";
import Button from "./Button/button";
import { logout } from "../api/auth";

interface Props {}
const Sidebar: React.FC<Props> = (props) => {
  console.log("sidebar rendering");
  useEffect(() => console.log("sidebar rendering for the first time"), []);
  return (
    <div>
      <div className="h-screen px-8 bg-gray-400 ">
        {" "}
        this is sidebar
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
