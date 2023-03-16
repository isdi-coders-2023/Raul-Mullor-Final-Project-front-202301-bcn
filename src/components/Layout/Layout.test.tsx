import { screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/Theme";
import { renderRouterWithProviders } from "../../testUtils";
import { UserState } from "../../types/user/types";
import Header from "../Header/Header";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a banner", () => {
      renderRouterWithProviders(
        {},
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      );

      const banner = screen.getByRole("banner");

      expect(banner).toBeInTheDocument();
    });
  });
});
