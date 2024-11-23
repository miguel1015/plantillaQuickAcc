import { useQuery } from "react-query";
import apiLogin from "../../apiClients/login/loginClients";
import { ResponseLogin } from "../../types/login/responseLogin";

const getLogin = async () => {
  const { data } = await apiLogin.post<ResponseLogin>("");
  return data;
};

export const useLoginApi = () => {
  return useQuery("login", getLogin);
};
