import React, { memo, useEffect } from "react";
interface Props {}
const AuthHero: React.FC<Props> = (props) => {
  console.log("authhero rendering");
  useEffect(() => console.log("Authhero rendering for the first time"), []);

  return (
    <div className="h-screen text-white bg-blue-800 ">
      this is the logo image section
    </div>
  );
};
export default memo(AuthHero);
