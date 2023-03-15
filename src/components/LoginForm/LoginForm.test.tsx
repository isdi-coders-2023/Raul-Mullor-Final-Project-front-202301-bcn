import { act, screen } from "@testing-library/react";
import { renderRouterWithProviders } from "../../testUtils";
import LoginForm from "./LoginForm";
import userEvent from "@testing-library/user-event";

const mockLoginUser = jest.fn();

jest.mock("../../hooks/useUser/useUser", () => () => ({
  loginUser: mockLoginUser,
}));

describe("Given a LoginForm component", () => {
  describe("When its redered", () => {
    test("Then it should show a label with the text 'Email'", () => {
      const labelText = "Email";

      renderRouterWithProviders(<LoginForm />);

      const expectedLabel = screen.getByLabelText(labelText);

      expect(expectedLabel).toBeInTheDocument();
    });
  });

  describe("When user send on email input", () => {
    test("Then it changes the value of this input", async () => {
      const emailLabel = "Email";
      const emailText = "jhonny@jhon.com";

      renderRouterWithProviders(<LoginForm />);

      const emailInput = screen.getByLabelText(emailLabel);

      await act(async () => await userEvent.type(emailInput, emailText));

      expect(emailInput).toHaveValue(emailText);
    });
  });

  describe("When user send on password input", () => {
    test("Then it changes the value of this input", async () => {
      const passwordLabel = "Password";
      const passwordText = "12345678";

      renderRouterWithProviders(<LoginForm />);

      const passwordInput = screen.getByLabelText(passwordLabel);

      await act(async () => await userEvent.type(passwordInput, passwordText));

      expect(passwordInput).toHaveValue(passwordText);
    });
  });
});
