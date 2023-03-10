import { screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../styles/GlobalStyles";
import theme from "../../styles/Theme";
import renderWithProviders from "../../testUtils";
import LoginPage from "./LoginPage";

describe("Given a Login page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a link with the text 'Sign up'", () => {
      const linkText = "Sign up";

      renderWithProviders(
        <ThemeProvider theme={theme}>
          <LoginPage />
        </ThemeProvider>
      );

      const expectedLinkText = screen.getByRole("link", {
        name: linkText,
      });

      expect(expectedLinkText).toBeInTheDocument();
    });

    test("Then it should show a button with the text 'LOG IN'", () => {
      const buttonText = "LOG IN";

      renderWithProviders(
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <LoginPage />
        </ThemeProvider>
      );

      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
