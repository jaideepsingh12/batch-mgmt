import { groupsAction } from "../actions/groups.actions";
import { GroupRequest, fetchGroups as fetchGroupsApi } from "../api/group";
import { groupQueryLoadingSelector } from "../selectors/groups.selectors";
import { store } from "../store";

export const fetchGroups = (request: GroupRequest) => {
  const queryLoading = groupQueryLoadingSelector(store.getState());
  const query = request.query;
  const loading = queryLoading[query];

  groupsAction.query(query);

  if (loading) {
    return;
  }
  fetchGroupsApi(request).then((groups) => {
    groupsAction.fetched(query, groups);
  });
};
