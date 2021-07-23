import React, { memo, useEffect } from "react";
import AuthImg from "../img/AuthImg.webp";
interface Props {}
const AuthHero: React.FC<Props> = (props) => {
  console.log("authhero rendering");
  useEffect(() => console.log("Authhero rendering for the first time"), []);

  return (
    <div className="relative hidden bg-black lg:block">
      <img
        src={AuthImg}
        alt="AuthImg"
        className="absolute w-3/4 transform -translate-x-1/2 -translate-y-1/2 h-3/4 top-1/2 left-1/2"
      />
    </div>
  );
};
export default memo(AuthHero);
