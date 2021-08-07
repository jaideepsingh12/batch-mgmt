import { User } from "../modals/User";
import { ME_FETCH, ME_LOGIN } from "../actions/actions.constants";
import { Reducer } from "redux";

export interface UserState {
  byId: { [id: number]: User };
}
const initialState = {
  byId: {},
};

export const userReducer: Reducer<UserState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ME_FETCH:
    case ME_LOGIN:
      const user = action.payload as User;
      return { ...state, byId: { ...state.byId, [user.id]: user } };
    default:
      return state;
  }
};
