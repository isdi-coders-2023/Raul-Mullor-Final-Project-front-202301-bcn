import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import theme from "../../styles/Theme";
import Button from "./Button";

describe("Given a Button component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a button with the text 'LOG IN'", () => {
      const buttonText = "LOG IN";

      render(
        <ThemeProvider theme={theme}>
          <Button text={buttonText} />
        </ThemeProvider>
      );
      const expectedButton = screen.getByRole("button", {
        name: buttonText,
      });

      expect(expectedButton).toBeInTheDocument();
    });
  });
});
