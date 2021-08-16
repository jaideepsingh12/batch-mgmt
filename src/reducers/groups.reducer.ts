import { Reducer } from "redux";
import {
  GROUPS_FETCHED,
  GROUPS_QUERY_CHANGED,
  GROUP_FETCH_ONE_COMPLETE,
} from "../actions/actions.constants";
import { Group } from "../modals/Group";
import { addMany, addOne, EntityState, getIds } from "./entity.reducer";

export interface GroupState extends EntityState<Group> {
  query: string;
  queryMap: { [query: string]: number[] };
  loading: boolean;
}

const initialState = {
  byId: {},
  query: "",
  queryMap: {},
  loading: false,
};
export const groupReducer: Reducer<GroupState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case GROUPS_QUERY_CHANGED:
      return {
        ...state,
        query: action.payload,
        loading: true,
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
        loading: false,
      };
    case GROUP_FETCH_ONE_COMPLETE:
      return addOne(state, action.payload) as GroupState;

    default:
      return state;
  }
};
