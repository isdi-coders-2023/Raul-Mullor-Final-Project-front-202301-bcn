import { screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/Theme";
import { renderWithProviders } from "../../testUtils";
import HomePage from "./HomePage";

describe("Given a Login page", () => {
  describe("When it is rendered", () => {
    test("Then it should show a 'heading' with the text 'your characters'", () => {
      const headingText = "your characters";

      renderWithProviders(
        <ThemeProvider theme={theme}>
          <HomePage />
        </ThemeProvider>
      );

      const expectedHeadingText = screen.getByRole("heading", {
        name: headingText,
      });

      expect(expectedHeadingText).toBeInTheDocument();
    });

    test("Then it should show a button with text 'SHOW MORE'", () => {
      const buttonText = "SHOW MORE";

      renderWithProviders(
        <ThemeProvider theme={theme}>
          <HomePage />
        </ThemeProvider>
      );
      const expectedButtonText = screen.getByRole("button", {
        name: buttonText,
      });
      expect(expectedButtonText).toBeInTheDocument();
    });
  });
});
