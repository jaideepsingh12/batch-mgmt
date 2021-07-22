import React, { memo } from "react";
interface Props {
  backgroundColor?: string;
  width?: number;
}
const ProBar: React.FC<Props> = ({ backgroundColor, width }) => {
  if (width! > 100) {
    width = 100;
    console.log("width value given is greater than 100");
  } else if (width! < 0) {
    width = 0;
    console.log("width value given is less than 0");
  }

  const Width = width + "%";
  return (
    <div>
      <div className="relative h-5 bg-gray-100 rounded-full">
        <div
          className="z-50 h-5 rounded-full"
          style={{
            backgroundColor,
            width: Width,
          }}
        ></div>
      </div>
    </div>
  );
};
export default memo(ProBar);
