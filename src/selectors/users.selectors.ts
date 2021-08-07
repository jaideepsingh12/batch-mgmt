import { createSelector } from "reselect";
import { usersStateSelector } from "./app.selectors";

export const usersbyIdSelector = createSelector(
  [usersStateSelector],
  (users) => users.byId
);
