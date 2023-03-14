import { screen } from "@testing-library/react";
import { mockCharacter } from "../../mocks/mocks";
import { renderWithProviders } from "../../testUtils";
import CardList from "./CardList";

describe("Given a cardList component", () => {
  describe("When its rendered", () => {
    test("Then it should show a list of card with one card with name 'Victor' a pathfinderclass 'monk' and a race 'human'", () => {
      const nameText = "Victor";

      renderWithProviders(<CardList />, {
        character: { character: [mockCharacter] },
      });

      const expectedNameText = screen.getByRole("heading", {
        name: nameText,
      });

      expect(expectedNameText).toBeInTheDocument();
    });
  });
});
