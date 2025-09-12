import http from "./httpServices";

export const signupService = async (data: {
  name: string;
  email: string;
  password: string;
}) => {
  return http.post(`/user/signup`, data).then(({ data }) => data.data);
};
export const signinService = async (data: {
  email: string;
  password: string;
}) => {
  return http.post(`/user/signin`, data).then(({ data }) => data.data);
};

export const getUserApi = async () => {
  return http.get(`/user/profile`).then(({ data }) => data.data);
};
