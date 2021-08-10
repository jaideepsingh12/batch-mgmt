import { Reducer } from "redux";
import { GROUPS_FETCHED, GROUPS_QUERY } from "../actions/actions.constants";
import { Group } from "../modals/Group";
import { addMany, EntityState, getIds } from "./entity.reducer";

export interface GroupState extends EntityState<Group> {
  query: string;
  queryMap: { [query: string]: number[] };
  loadingQuery: { [query: string]: boolean };
}

const initialState = {
  byId: {},
  query: "",
  queryMap: {},
  loadingQuery: {},
};
export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUPS_QUERY:
      return {
        ...state,
        query: action.payload.query,
        loadingQuery: {
          ...state.loadingQuery,
          [action.payload.query]: action.payload.loading,
        },
      };
    case GROUPS_FETCHED:
      const groups = action.payload.groups as Group[];

      const groupIds = getIds(groups);
      // const groupMap = groups.reduce((prev, group) => {
      //   return { ...prev, [group.id]: group };
      // }, {});
      const newState = addMany(state, groups) as GroupState;
      return {
        ...newState,
        queryMap: {
          ...state.queryMap,
          [action.payload.query]: groupIds,
        },
        // byId: { ...state.byId, ...groupMap },
        loadingQuery: {
          ...newState.loadingQuery,
          [action.payload.query]: false,
        },
      };
    default:
      return state;
  }
};
