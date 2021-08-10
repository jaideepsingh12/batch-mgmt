import { groupsAction } from "../actions/groups.actions";
import { GroupRequest, fetchGroups as fetchGroupsApi } from "../api/group";
import { groupQueryMapSelector } from "../selectors/groups.selectors";
import { store } from "../store";

export const fetchGroups = (request: GroupRequest) => {
  const queryMap = groupQueryMapSelector(store.getState());
  const query = request.query;
  const groupIds = queryMap[query];

  groupsAction.query(query, !groupIds);

  if (groupIds) {
    return;
  }
  fetchGroupsApi(request).then((groups) => {
    groupsAction.fetched(query, groups);
  });
};
