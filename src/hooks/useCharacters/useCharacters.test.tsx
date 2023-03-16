import { renderHook } from "@testing-library/react";
import Wrapper from "../../mocks/Wrapper";
import { store } from "../../store/store";
import useCharacters from "./useCharacters";
import { loadCharactersActionCreator } from "../../store/feature/charactersSlice/charactersSlice";
import { mockCharacters } from "../../mocks/mocks";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
afterEach(() => {
  jest.clearAllMocks();
});

const spyDispatch = jest.spyOn(store, "dispatch");

describe("Given a getCharacters function", () => {
  describe("When is called and response status is 200", () => {
    test("Then it should show a list of characters", async () => {
      const {
        result: {
          current: { getCharacters },
        },
      } = renderHook(() => useCharacters(), { wrapper: Wrapper });

      await getCharacters();

      expect(spyDispatch).toHaveBeenCalledWith(
        loadCharactersActionCreator(mockCharacters.characters)
      );
    });
  });
  describe("When is called and response is an error", () => {
    test("Then it should throw and error with status 404", async () => {
      server.use(...errorHandlers);

      const {
        result: {
          current: { getCharacters },
        },
      } = renderHook(() => useCharacters(), { wrapper: Wrapper });

      await getCharacters();

      expect(spyDispatch).not.toHaveBeenCalled();
    });
  });
});
