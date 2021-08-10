import { createSelector } from "reselect";

import { groupStateSelector } from "./app.selectors";

//export const groupQuerySelector = (state: AppState) => state.groups.query;

// export const groupQuerySelector = (state: AppState) => {
//   const groupState = groupStateSelector(state);
//   return groupState.query;
// };

export const groupQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.query
);

// export const groupsFetchedSelector = (state: AppState) => {
//   const groupsIds = state.groups.queryMap[state.groups.query] || [];
//   const groups = groupsIds.map((id) => state.groups.byId[id]);
//   return groups;
// };

// const groupQueryMapSelector = (state: AppState) => {
//   const groupState = groupStateSelector(state);
//   return groupState.queryMap;
// };
export const groupQueryMapSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.queryMap
);

// const groupsbyIdSelector = (state: AppState) => {
//   const groupState = groupStateSelector(state);
//   return groupState.byId;
// };

export const groupbyIdSelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.byId
);

const groupLoadingQuerySelector = createSelector(
  [groupStateSelector],
  (groupState) => groupState.loadingQuery
);

export const groupLoadingSelector = createSelector(
  [groupQuerySelector, groupLoadingQuerySelector],
  (query, loadingMap) => loadingMap[query]
);

// export const groupsFetchedSelector = (state: AppState) => {
//   const query = groupQuerySelector(state);
//   const queryMap = groupQueryMapSelector(state);
//   const byId = groupbyIdSelector(state);

//   const groupsIds = queryMap[query] || [];
//   const groups = groupsIds.map((id) => byId[id]);
//   return groups;
// };

export const groupsFetchedSelector = createSelector(
  [groupQuerySelector, groupQueryMapSelector, groupbyIdSelector],
  (query, queryMap, byId) => {
    const groupsIds = queryMap[query] || [];
    const groups = groupsIds.map((id) => byId[id]);
    return groups;
  }
);
