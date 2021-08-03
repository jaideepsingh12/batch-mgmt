import { AnyAction, createStore, Reducer } from "redux";

import { User } from "./modals/User";
import { Group } from "./modals/Group";
import { TypedUseSelectorHook, useSelector } from "react-redux";
const ME_FETCH = "me/fetch";
const ME_LOGIN = "me/login";
const GROUPS_FETCH = "groups/fetch";
const UI_SIDEBAR_TOGGLE = "ui/sidebar_toggle";

export interface AppState {
  me?: User;
  isSidebarOpen: boolean;
  groups: Group[];
}

const initialState: AppState = {
  me: undefined,
  groups: [],
  isSidebarOpen: true,
};

const reducer: Reducer<AppState> = (
  currentState = initialState,
  dispatchedAction: AnyAction
) => {
  switch (dispatchedAction.type) {
    case ME_FETCH:
    case ME_LOGIN:
      return { ...currentState, me: dispatchedAction.payload };
    case GROUPS_FETCH:
      return { ...currentState, groups: dispatchedAction.payload };
    case UI_SIDEBAR_TOGGLE:
      return { ...currentState, isSidebarOpen: dispatchedAction.payload };
    default:
      return currentState;
  }
};
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const meFetchedAction = (u: User) => ({ type: ME_FETCH, payload: u });
export const uiSidebarToggle = (open: Boolean) => ({
  type: UI_SIDEBAR_TOGGLE,
  payload: open,
});

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
