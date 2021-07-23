import React, { ImgHTMLAttributes, memo } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {}
const AvtarStackImg: React.FC<Props> = ({ src }) => {
  return (
    <>
      <img
        src={src}
        alt="#"
        className="object-cover w-32 h-32 -ml-12 border-4 border-white rounded-full cursor-pointer tranform hover:scale-75"
      />
    </>
  );
};
export default memo(AvtarStackImg);
