import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  CharactersDataStructure,
  CharactersData,
} from "../../../types/characters/types";

const initialState: CharactersData = {
  character: [],
};

const charactersSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    loadCharacter: (
      currentCharacterState,
      action: PayloadAction<CharactersDataStructure>
    ) => ({
      ...currentCharacterState,
      characters: action.payload,
    }),
  },
});

export const { loadCharacter: loadCharactersActionCreator } =
  charactersSlice.actions;
export const charactersReducer = charactersSlice.reducer;
