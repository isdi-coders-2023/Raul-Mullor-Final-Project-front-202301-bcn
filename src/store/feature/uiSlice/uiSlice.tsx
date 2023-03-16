import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalPayload, UiState } from "../../../types/ui/types";

const initialState: UiState = {
  isLoading: false,
  modal: { isError: false, message: "", isSuccess: false },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openModal: (
      currentUiState,
      action: PayloadAction<ModalPayload>
    ): UiState => ({
      ...currentUiState,
      modal: {
        isError: action.payload.isError,
        message: action.payload.message,
        isSuccess: action.payload.isSuccess,
      },
    }),
    closeModal: (currentUiState): UiState => ({
      ...currentUiState,
      modal: {
        message: initialState.modal.message,
        isError: false,
        isSuccess: false,
      },
    }),
  },
});

export const {
  closeModal: closeModalActionCreator,
  openModal: openModalActionCreator,
} = uiSlice.actions;

export const uiReducer = uiSlice.reducer;
