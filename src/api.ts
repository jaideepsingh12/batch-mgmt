import axios from "axios";
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem(LS_LOGIN_TOKEN);
  if (!token) return config;
  return { ...config, headers: { ...config.headers, Authorization: token } };
});

interface LoginRequest {
  email: string;
  password: string;
}
interface LoginResponse {
  data: {
    is_2fa_enabled: boolean;
  };
  token: string;
  user: User;
}
interface User {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  role: "staff" | "admin";
}
const BASE_URL = "https://api-dev.domecompass.com";
export const LS_LOGIN_TOKEN = "login_token";

export const login = (data: LoginRequest) => {
  const url = BASE_URL + "/login";
  console.log(data);
  //   return fetch(url, {
  //     method: "POST",
  //     body: JSON.stringify(data),
  //     headers: { "Content-Type": "application/json" },
  //   }).then((response) => {
  //     console.log(response);
  //     return response;
  //   });
  return axios.post<LoginResponse>(url, data).then((response) => {
    console.log(response.data.token);
    localStorage.setItem(LS_LOGIN_TOKEN, response.data.token);
    return response.data.user;
  });
};
export const logout = () => {
  localStorage.removeItem(LS_LOGIN_TOKEN);
};
interface GroupRequest {
  limit?: number;
  offset?: number;
  query?: string;
  status: "all-groups" | "favourite" | "archieved";
}

export const fetchGroups = (data: GroupRequest) => {
  const url = BASE_URL + "/groups";
  //   const token = localStorage.getItem(LS_LOGIN_TOKEN);
  return axios
    .get(url, {
      params: data /*, headers: { Authorization: token }*/,
    })
    .then((response) => response.data.data)

    .catch((e) => console.error(e));
};
