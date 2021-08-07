import { createSelector } from "reselect";
import { authStateSelector } from "./app.selectors";
import { usersbyIdSelector } from "./users.selectors";

// export const meSelector = (state: AppState) =>
//   state.auth.id !== undefined ? state.users.byId[state.auth.id] : undefined;

const authIdSelector = createSelector([authStateSelector], (auth) => auth.id);

export const meSelector = createSelector(
  [authIdSelector, usersbyIdSelector],
  (id, byId) => (id !== undefined ? byId[id] : undefined)
);
