import React, { memo } from "react";
import model from "./model.jpg";
import { GrStatusGoodSmall } from "react-icons/gr";
interface Props {
  shownotification?: boolean;
  online?: boolean;
}
const Avtar: React.FC<Props> = ({ online, shownotification }) => {
  const active = online === true ? "fill-green" : "fill-gray";
  const show = shownotification === true ? "block" : "hidden";
  //   const status = online === undefined ? "hidden" : "block";

  return (
    <div className="relative flex">
      <img src={model} alt="#" className="w-32 h-32 rounded-full" />

      <GrStatusGoodSmall
        className={
          "absolute bottom-0 w-10 h-10 rounded-full none left-20 ring-4 ring-inset ring-white  " +
          active +
          " " +
          show
        }
      />
    </div>
  );
};
Avtar.defaultProps = { online: true };
export default memo(Avtar);
