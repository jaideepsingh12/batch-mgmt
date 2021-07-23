import React, { ImgHTMLAttributes, memo } from "react";
import AvtarStackImg from "./AvtarStackImg";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  children?: string[];
  stacklength?: number;
  size?: "sm" | "md" | "lg";
}
// let array = [
//   "https://media.glamour.com/photos/5a425fd3b6bcee68da9f86f8/master/w_1920,c_limit/best-face-oil.png",
//   "https://i0.wp.com/post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/03/GettyImages-1092658864_hero-1024x575.jpg?w=1155&h=1528",
//   "https://www.faceapp.com/img/content/compare/beard-example-before@3x.jpg",
//   "https://media.istockphoto.com/photos/beautiful-woman-face-portrait-beauty-model-isolated-on-white-picture-id640299760?k=6&m=640299760&s=170667a&w=0&h=3DB6ScZMBuq5W3755x_ZJPS7jHtgtA0GFYo7EdGGy78=",
//   "https://www.byrdie.com/thmb/kAXw1ZXSfixyaiIjLt0tVfRzhhs=/843x1024/filters:fill(auto,1)/GettyImages-1035308964-5d15a77127854247b5c841d339a546c0.jpeg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_kmxRH75UUzUdJR_nJS1g3okFJFyZeSv7IQ&usqp=CAU",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL17fZHkmmrXz8BupXTxnnoJxstS7d4VDoZQ&usqp=CAU",

// ];

const AvtarStack: React.FC<Props> = ({ children, stacklength, size }) => {
  let avtarSize: string;
  let indiSize: string;

  if (size === "sm") {
    avtarSize = "w-16 h-16 -ml-6";
    indiSize = "px-2 py-1 text-sm -ml-4";
  } else if (size === "md") {
    avtarSize = "w-24 h-24 -ml-8";
    indiSize = "px-3 py-2 -ml-6";
  } else {
    avtarSize = "w-32 h-32 -ml-12";
    indiSize = "px-3 py-2 text-lg -ml-8";
  }
  return (
    <div className="flex m-12 ml-20">
      <div className="flex">
        {children!.map(function (element, index) {
          if (index < stacklength!) {
            return (
              <img
                className={
                  "object-cover  transform border-4 ring-2 ring-white ring-offset-0 ring-inset rounded-full cursor-pointer focus:translate-y-10 " +
                  avtarSize
                }
                src={element}
                alt="#"
              />
            );
          }
        })}
      </div>
      {children!.length - stacklength! > 0 && (
        <div
          className={
            "self-center z-20 text-white bg-red-500 rounded-full  " + indiSize
          }
        >
          {children!.length - stacklength!} more{" "}
        </div>
      )}
    </div>
  );
};

export default memo(AvtarStack);
