import axios, { CancelToken } from "axios";
import { Group } from "../modals/Group";
import { BASE_URL } from "./base";

export interface GroupRequest {
  limit?: number;
  offset?: number;
  query: string;
  status: "all-groups" | "favourite" | "archieved";
}
export interface GroupResponse {
  data: Group[];
}
const url = BASE_URL + "/groups";
export const fetchGroups = (data: GroupRequest, token?: CancelToken) => {
  //   const token = localStorage.getItem(LS_LOGIN_TOKEN);
  return axios
    .get<GroupResponse>(url, {
      params: data,
      cancelToken: token,
    })
    .then((response) => response.data.data)

    .catch((e) => console.error(e));
};
