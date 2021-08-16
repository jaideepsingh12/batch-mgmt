import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchOneGroup } from "../../actions/groups.actions";
import { groupbyIdSelector } from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";
interface Props {}
const GroupDetailPage: React.FC<Props> = (props) => {
  const groupId = +useParams<{ groupId: string }>().groupId;

  const GroupsByIds = useAppSelector(groupbyIdSelector);
  const group = GroupsByIds[groupId];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOneGroup(groupId));
  }, [groupId]);

  if (!group) {
    return <div>loading ....</div>;
  }

  return (
    <>
      <div>
        <Link to="/dashboard">Back to Dashboard </Link>
      </div>
      <div>
        this is details page of {group.name}(id:{group.id})
      </div>
      <Link to={"/groups/" + (groupId + 1)}>next group</Link>
    </>
  );
};
GroupDetailPage.defaultProps = {};
export default memo(GroupDetailPage);
