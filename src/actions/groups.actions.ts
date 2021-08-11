import { bindActionCreators } from "redux";
import { Group } from "../modals/Group";
import { store } from "../store";
import { GROUPS_FETCHED, GROUPS_QUERY } from "./actions.constants";

const queryAction = (query: string) => ({
  type: GROUPS_QUERY,
  payload: query,
});

const FetchedAction = (query: string, groups: Group[] | void) => ({
  type: GROUPS_FETCHED,
  payload: { query, groups },
});

export const groupsAction = bindActionCreators(
  {
    query: queryAction,
    fetched: FetchedAction,
  },
  store.dispatch
);
