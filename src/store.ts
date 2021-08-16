import { applyMiddleware, combineReducers, createStore } from "redux";

import { TypedUseSelectorHook, useSelector } from "react-redux";
import { userReducer } from "./reducers/users.reducer";
import { groupReducer } from "./reducers/groups.reducer";
import { authReducer } from "./reducers/auth.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { sagaMiddleware } from "./sagas";
import { watchGroupQueryChanged } from "./sagas/groups.sagas";
export type AppState = ReturnType<typeof store.getState>;

const reducer = combineReducers({
  users: userReducer,
  groups: groupReducer,
  auth: authReducer,
});

export const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(watchGroupQueryChanged);

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
