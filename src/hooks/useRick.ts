import { useCharacters } from "../api/queries/rick/getUser";
import { useCharacterStore } from "../store/rickAndMortyTest/rickAndMortyStore";
import { useEffect } from "react";

export const useFetchCharacters = () => {
  const { data, error, isLoading } = useCharacters();
  const addCharacter = useCharacterStore((state) => state.addCharacter);

  useEffect(() => {
    if (data) {
      data?.results?.forEach(addCharacter);
    }
  }, [data, addCharacter]);

  return { data, error, isLoading };
};
