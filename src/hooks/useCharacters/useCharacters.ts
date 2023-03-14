import { useCallback } from "react";
import { loadCharactersActionCreator } from "../../store/feature/charactersSlice/charactersSlice";

import { useAppDispatch } from "../../store/hooks";
import { CharactersData } from "../../types/characters/types";

const apiUrl = process.env.REACT_APP_URL_API;
const pathCharacters = "/characters";
const getCharactersEndpoint = "/characters";

const useCharacters = () => {
  const dispatch = useAppDispatch();

  const getCharacters = useCallback(async () => {
    try {
      const response = await fetch(
        `${apiUrl}${pathCharacters}${getCharactersEndpoint}`,
        {
          method: "GET",
          headers: { "Content-Type": "application/json; charset=UTF-8" },
        }
      );
      const { character } = (await response.json()) as CharactersData;

      if (!response.ok) {
        return;
      }

      dispatch(loadCharactersActionCreator(character));
    } catch (error) {
      return (error as Error).message;
    }
  }, [dispatch]);

  return { getCharacters };
};

export default useCharacters;
