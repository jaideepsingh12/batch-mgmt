import axios from "axios";
import { Group } from "../modals/Group";
import { BASE_URL } from "./base";

interface GroupRequest {
  limit?: number;
  offset?: number;
  query?: string;
  status: "all-groups" | "favourite" | "archieved";
}
interface GroupResponse {
  data: Group[];
}
const url = BASE_URL + "/groups";
export const fetchGroups = (data: GroupRequest) => {
  //   const token = localStorage.getItem(LS_LOGIN_TOKEN);
  return axios
    .get<GroupResponse>(url, {
      params: data /*, headers: { Authorization: token }*/,
    })
    .then((response) => response.data.data)

    .catch((e) => console.error(e));
};
