import { screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/Theme";
import renderWithProviders from "../../testUtils";
import Header from "../Header/Header";

describe("Given a Layout component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a banner", () => {
      renderWithProviders(
        <ThemeProvider theme={theme}>
          <Header />
        </ThemeProvider>
      );

      const banner = screen.getByRole("banner");

      expect(banner).toBeInTheDocument();
    });
  });
});
