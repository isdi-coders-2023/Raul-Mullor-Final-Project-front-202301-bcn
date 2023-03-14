import { screen } from "@testing-library/react";
import { mockCharacter } from "../../mocks/mocks";
import { renderWithProviders } from "../../testUtils";
import Card from "./Card";

describe("Given a card component", () => {
  describe("When its rendered", () => {
    test("Then it should show a image", () => {
      renderWithProviders(<Card character={mockCharacter} />);

      const expectedImage = screen.getByRole("img");

      expect(expectedImage).toBeInTheDocument();
    });
  });
});
