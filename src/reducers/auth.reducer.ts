import { Reducer } from "redux";
import { ME_FETCH, ME_LOGIN } from "../actions/actions.constants";
export interface AuthState {
  id?: number;
}

const initialState = {};

export const authReducer: Reducer<AuthState> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ME_FETCH:
    case ME_LOGIN:
      const userId = action.payload.id as number;
      return { ...state, id: userId };
    default:
      return state;
  }
};
