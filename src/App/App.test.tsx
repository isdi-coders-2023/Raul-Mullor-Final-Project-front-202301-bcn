import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../testUtils";
import App from "./App";

describe("Given a component App", () => {
  describe("When its rendered", () => {
    test("Then it should show a 'Header' with an image", () => {
      renderRouterWithProviders(<App />);

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
