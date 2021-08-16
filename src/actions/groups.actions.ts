import { Group } from "../modals/Group";
import { store } from "../store";
import {
  GROUPS_FETCHED,
  GROUPS_QUERY_CHANGED,
  GROUP_FETCH_ONE,
  GROUP_FETCH_ONE_COMPLETE,
} from "./actions.constants";

export const queryChangedAction = (query: string) => ({
  type: GROUPS_QUERY_CHANGED,
  payload: query,
});

export const fetchedAction = (query: string, groups: Group[] | void) => ({
  type: GROUPS_FETCHED,
  payload: { query, groups },
});

export const fetchOneGroup = (id: number) => ({
  type: GROUP_FETCH_ONE,
  payload: id,
});

export const fetchOneGroupComplete = (group: Group) => ({
  type: GROUP_FETCH_ONE_COMPLETE,
  payload: group,
});
