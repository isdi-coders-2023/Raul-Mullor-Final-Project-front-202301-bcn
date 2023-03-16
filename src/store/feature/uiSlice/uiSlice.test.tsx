import { ModalPayload, UiState } from "../../../types/ui/types";
import {
  closeModalActionCreator,
  openModalActionCreator,
  uiReducer,
} from "./uiSlice";

describe("Given a uiReducer", () => {
  describe("When is called with a closeModal action after showing a modal for an error with the text 'Wrong credentials'", () => {
    test("Then it should close the modal", () => {
      const uiInitialState: UiState = {
        isLoading: false,
        modal: {
          isError: true,
          message: "Wrong credentials",
          isSuccess: false,
        },
      };

      const expectedNewState: UiState = {
        isLoading: false,
        modal: { isError: false, message: "", isSuccess: false },
      };

      const closeModalAction = closeModalActionCreator();
      const newUiState = uiReducer(uiInitialState, closeModalAction);

      expect(newUiState).toStrictEqual(expectedNewState);
    });
  });

  describe("When it is called with an openModal action after showing a modal of succes with the text 'Delete was succesful'", () => {
    test("Then it should hide the modal", () => {
      const uiInitialState: UiState = {
        isLoading: false,
        modal: {
          isError: true,
          message: "Delete was susccesful",
          isSuccess: false,
        },
      };

      const modalPayload: ModalPayload = {
        isError: false,
        isSuccess: true,
        message: "Delete was succesful",
      };

      const expectedNewState: UiState = {
        isLoading: false,
        modal: {
          isError: false,
          message: "Delete was succesful",
          isSuccess: true,
        },
      };

      const openModalAction = openModalActionCreator(modalPayload);
      const newUiState = uiReducer(uiInitialState, openModalAction);

      expect(newUiState).toStrictEqual(expectedNewState);
    });
  });
});
