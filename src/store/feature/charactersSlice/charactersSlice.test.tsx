import { mockCharacter } from "../../../mocks/mocks";
import {
  CharactersData,
  CharactersDataStructure,
} from "../../../types/characters/types";
import {
  charactersReducer,
  loadCharactersActionCreator,
} from "./charactersSlice";

const characters: CharactersDataStructure = [mockCharacter];
const initialCharacterState: CharactersData = {
  characters: [],
};

describe("Given a character reducer", () => {
  describe("When it receives a new state and the action to load characters", () => {
    test("Then it should return a list of 2 events", () => {
      const loadCharactersAction = loadCharactersActionCreator(characters);
      const expectedCharacterToLoad: CharactersData = {
        characters: characters,
      };

      const newCharacter = charactersReducer(
        initialCharacterState,
        loadCharactersAction
      );

      expect(newCharacter).toEqual(expectedCharacterToLoad);
    });
  });
});
