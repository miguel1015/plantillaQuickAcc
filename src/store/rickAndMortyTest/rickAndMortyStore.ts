import { create } from "zustand";
import { Character } from "../../api/types/rick/userTypes";

interface CharacterState {
  characters: Character[];
  addCharacter: (character: Character) => void;
}

export const useCharacterStore = create<CharacterState>((set) => ({
  characters: [],
  addCharacter: (character) =>
    set((state) => ({ characters: [...state.characters, character] })),
}));
