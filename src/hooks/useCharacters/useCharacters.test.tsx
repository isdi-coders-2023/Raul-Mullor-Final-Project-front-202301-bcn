import { renderHook } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import { store } from "../../store/store";
import useCharacters from "./useCharacters";
import { loadCharactersActionCreator } from "../../store/feature/charactersSlice/charactersSlice";
import { mockCharacters } from "../../mocks/mocks";

afterEach(() => {
  jest.clearAllMocks();
});

const spyDispatch = jest.spyOn(store, "dispatch");

describe("Given", () => {
  describe("When", () => {
    test("Then", async () => {
      const {
        result: {
          current: { getCharacters },
        },
      } = renderHook(() => useCharacters(), { wrapper: Wrapper });

      await getCharacters();

      expect(spyDispatch).toHaveBeenCalledWith(
        loadCharactersActionCreator(mockCharacters.character)
      );
    });
  });
});
