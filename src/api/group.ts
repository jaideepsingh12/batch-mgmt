import axios, { CancelToken } from "axios";
import { Group } from "../modals/Group";
import { BASE_URL, get } from "./base";

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
export const fetchGroups = (data: GroupRequest) => {
  return get<GroupResponse>(url, {
    params: data,
  });
};
export const fetchOneGroup = (id: string) => {
  const url = BASE_URL + "/groups/" + id;
  return axios.get<GroupResponse>(url);
};
