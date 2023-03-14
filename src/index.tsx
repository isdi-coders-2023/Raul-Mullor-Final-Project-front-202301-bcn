import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store/store";
import GlobalStyles from "./styles/GlobalStyles";
import "@fontsource/spectral";
import "@fontsource/spectral-sc";
import { ThemeProvider } from "styled-components";
import theme from "./styles/Theme";
import { RouterProvider } from "react-router";
import { router } from "./routers/routes";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
