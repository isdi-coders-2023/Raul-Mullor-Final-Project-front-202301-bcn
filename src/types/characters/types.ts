export interface CharacterDataStructure {
  name: string;
  age: number;
  gender: string;
  height: string;
  weight: string;
  alignment: Alignment;
  race: Races;
  pathfinderclass: Classes;
  image: string;
}

export interface CharactersData {
  Character: CharactersDataStructure;
}

enum Races {
  human,
  elf,
  dwarf,
  gnome,
  halfElf,
  halfOrc,
  halfling,
}

enum Classes {
  barbarian,
  bard,
  druid,
  fighter,
  monk,
  paladin,
  ranger,
  rogue,
  sorcerer,
  wizard,
}

enum Alignment {
  LawfulGood,
  NeutralGood,
  ChaoticGood,
  LawfulNeutral,
  Neutral,
  ChaoticNeutral,
  LawfulEvil,
  NeutralEvil,
  ChaoticEvil,
}

export type CharactersDataStructure = CharacterDataStructure[];
