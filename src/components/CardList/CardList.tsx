import { useEffect } from "react";
import useCharacters from "../../hooks/useCharacters/useCharacters";
import { useAppSelector } from "../../store/hooks";
import { CharacterDataStructure } from "../../types/characters/types";
import Card from "../Card/Card";

const CardList = (): JSX.Element => {
  const { getCharacters } = useCharacters();

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  const characters = useAppSelector((state) => state.character.character);

  return (
    <>
      {characters?.map((character: CharacterDataStructure) => (
        <li key={character.id}>
          <Card character={character} />
        </li>
      ))}
    </>
  );
};

export default CardList;
