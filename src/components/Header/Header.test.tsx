import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils";

import Header from "./Header";

describe("Given a Header component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a navbar", () => {
      renderRouterWithProviders(<Header />);

      const expectedHeader = screen.getByRole("navigation");

      expect(expectedHeader).toBeInTheDocument();
    });

    test("Then it should show one image", () => {
      renderRouterWithProviders(<Header />);
      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
