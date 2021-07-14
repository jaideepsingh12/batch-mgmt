import React, { memo } from "react";
import { useParams } from "react-router-dom";
interface Props {}
const Lecture: React.FC<Props> = (props) => {
  const { lecturenumber, batchnumber } = useParams<any>();
  return (
    <div>
      {" "}
      showing data of batch #{batchnumber} and lecture #{lecturenumber}
    </div>
  );
};
export default memo(Lecture);
