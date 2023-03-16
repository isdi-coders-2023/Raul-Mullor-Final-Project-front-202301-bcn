import {
  configureStore,
  ThunkAction,
  Action,
  PreloadedState,
  combineReducers,
} from "@reduxjs/toolkit";
import { charactersReducer } from "./feature/charactersSlice/charactersSlice";
import { uiReducer } from "./feature/uiSlice/uiSlice";
import { userReducer } from "./feature/users/usersSlice/usersSlice";

const rootReducer = combineReducers({
  ui: uiReducer,
  user: userReducer,
  character: charactersReducer,
});

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  });
};

export const store = setupStore();

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof rootReducer>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
