import axios, { AxiosAdapter, Canceler, CancelTokenSource } from "axios";
import { groupsAction } from "../actions/groups.actions";
import { GroupRequest, fetchGroups as fetchGroupsApi } from "../api/group";

let canceler: Canceler | undefined;

export const fetchGroups = (request: GroupRequest) => {
  const query = request.query;

  groupsAction.query(query);

  canceler && canceler();

  const tokenSource = axios.CancelToken.source(); // this will give a token and corresponding cancelation function.

  canceler = tokenSource.cancel;

  fetchGroupsApi(request, tokenSource.token).then((groups) => {
    groupsAction.fetched(query, groups);
    canceler = undefined;
  });
};
