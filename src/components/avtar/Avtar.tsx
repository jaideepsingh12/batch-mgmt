import React, { memo } from "react";
import model from "./model.jpg";
import { GrStatusGoodSmall } from "react-icons/gr";
interface Props {
  shownotification?: boolean;
  online?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}
const Avtar: React.FC<Props> = ({ online, shownotification, size }) => {
  const active = online === true ? "fill-green" : "fill-gray";
  const show = shownotification === true ? "block" : "hidden";
  let avtarSize: string;
  let indiSize: string;

  if (size === "sm") {
    avtarSize = "w-10 h-10";
    indiSize = "w-2 h-2";
  } else if (size === "md") {
    avtarSize = "w-20 h-20";
    indiSize = "w-4 h-4";
  } else if (size === "lg") {
    avtarSize = "w-32 h-32";
    indiSize = "w-6 h-6";
  } else {
    avtarSize = "w-48 h-48";
    indiSize = "w-10 h-10";
  }

  return (
    <div className={"relative flex " + avtarSize}>
      <img src={model} alt="#" className="w-full h-full rounded-full " />

      <GrStatusGoodSmall
        className={
          "absolute bottom-2 rounded-full none right-2 ring-4 ring-inset ring-white  " +
          active +
          " " +
          show +
          "  " +
          indiSize
        }
      />
    </div>
  );
};
Avtar.defaultProps = { online: true };
export default memo(Avtar);
