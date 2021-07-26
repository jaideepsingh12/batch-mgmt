import React, { memo, useEffect } from "react";
import { logout } from "../api";

interface Props {}
const Sidebar: React.FC<Props> = (props) => {
  console.log("sidebar rendering");
  useEffect(() => console.log("sidebar rendering for the first time"), []);
  return (
    <div>
      <div className="w-20 h-screen bg-gray-400"> this is sidebar</div>
      <button
        className="px-3 py-2 bg-blue-cork"
        onClick={() => {
          logout();
          window.location.href = "/login";
        }}
      >
        Logout
      </button>
    </div>
  );
};
export default memo(Sidebar);
