import { useQuery } from "react-query";
import { GetCharactersResponse } from "../../types/rick/userTypes";
import apiRick from "../../apiClients/rick/todoClient";

const getCharacters = async () => {
  const { data } = await apiRick.get<GetCharactersResponse>(
    "/character/?page=2"
  );
  return data;
};

export const useCharacters = () => {
  return useQuery("characters", getCharacters);
};
