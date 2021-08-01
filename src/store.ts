import { AnyAction, createStore } from "redux";
import { User } from "./modals/User";
import { Group } from "./modals/Group";

interface AppStore {
  me?: User;
  groups: Group[];
  isSidebarOpen: boolean;
}

const initialState: AppStore = {
  me: undefined,
  groups: [],
  isSidebarOpen: true,
};

const reducer = (currentState = initialState, dispatchedAction: AnyAction) => {
  switch (dispatchedAction.type) {
    case "me/login":
      return { ...currentState, me: dispatchedAction.payload };
    default:
      return currentState;
  }
};
const store = createStore(reducer);
