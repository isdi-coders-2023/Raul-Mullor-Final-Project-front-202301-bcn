import { screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils";
import { UserState } from "../../types/user/types";
import Navbar from "./Navbar";

describe("Given a Navbar component", () => {
  describe("When it is rendered", () => {
    test("Then it should show a navbar", () => {
      const user: UserState = { email: "", id: "", isLogged: true, token: "" };
      renderRouterWithProviders({ user: user }, <Navbar />);

      const expectedNavBar = screen.getByRole("navigation");

      expect(expectedNavBar).toBeInTheDocument();
    });
  });
});
