import { combineReducers, createStore } from "redux";

import { TypedUseSelectorHook, useSelector } from "react-redux";
import { userReducer } from "./reducers/users.reducer";
import { groupReducer } from "./reducers/groups.reducer";
import { authReducer } from "./reducers/auth.reducer";

export type AppState = ReturnType<typeof store.getState>;

const reducer = combineReducers({
  users: userReducer,
  groups: groupReducer,
  auth: authReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
