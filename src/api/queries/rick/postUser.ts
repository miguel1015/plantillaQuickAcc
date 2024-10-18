import { useMutation } from "react-query";
import { PostUserRequest, PostUserResponse } from "../../types/rick/userTypes";
import apiClient from "../../apiClients/rick/todoClient";

const postUser = async (user: PostUserRequest): Promise<PostUserResponse> => {
  const { data } = await apiClient.post<PostUserResponse>("/users", user);
  return data;
};

// Hook para usar la mutación
export const usePostUser = () => {
  return useMutation(postUser);
};
