import { useMutation } from "react-query";
import apiLogin from "../../apiClients/login/loginClients";
import { ResponseLogin } from "../../types/login/responseLogin";
import { RequestLogin } from "../../types/login/requestLogin";

const postUser = async (user: RequestLogin): Promise<RequestLogin> => {
  const { data } = await apiLogin.post<ResponseLogin>("/", user);
  return data;
};

export const usePostUser = () => {
  return useMutation(postUser, {
    onSuccess: (data) => {
      console.log("Registro exitoso:", data);
      // Redirigir o mostrar un mensaje de éxito
    },
    onError: (error: any) => {
      console.error("Error al registrar:", error?.message || error);
      // Mostrar mensaje de error
    },
  });
};
