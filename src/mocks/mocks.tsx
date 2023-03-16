import {
  CharactersData,
  Alignment,
  CharacterDataStructure,
  Classes,
  Races,
} from "../types/characters/types";

export const mockCharacter: CharacterDataStructure = {
  name: "Victor",
  age: 32,
  gender: "male",
  height: "1.76",
  weight: "65kg",
  alignment: Alignment.ChaoticEvil,
  race: Races.human,
  pathfinderclass: Classes.monk,
  image: "https://avatars.githubusercontent.com/u/109736378?v=4",
  id: "s4l4m1v3g4n0",
};

export const mockCharacters: CharactersData = {
  characters: [mockCharacter],
};
