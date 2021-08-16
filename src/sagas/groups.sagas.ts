import {
  call,
  put,
  takeLatest,
  delay,
  takeEvery,
} from "@redux-saga/core/effects";
import { AnyAction } from "redux";
import {
  GROUPS_FETCHED,
  GROUPS_QUERY_CHANGED,
  GROUP_FETCH_ONE,
} from "../actions/actions.constants";
import {
  fetchedAction,
  fetchOneGroupComplete,
} from "../actions/groups.actions";
// import { fetchedAction } from "../actions/groups.actions";
import { fetchGroups as fetchGroupsApi, fetchOneGroup } from "../api/group";

export function* fetchGroups(action: AnyAction): Generator<any> {
  yield delay(300);
  const groupRes: any = yield call(fetchGroupsApi, {
    query: action.payload,
    status: "all-groups",
  });
  yield put(fetchedAction(action.payload, groupRes.data.data));
}

export function* fetchOne(action: AnyAction): Generator<any> {
  const res: any = yield call(fetchOneGroup, action.payload);
  yield put(fetchOneGroupComplete(res.data.data));
}

export function* watchGroupQueryChanged() {
  yield takeLatest(GROUPS_QUERY_CHANGED, fetchGroups);
  yield takeEvery(GROUP_FETCH_ONE, fetchOne);
}
