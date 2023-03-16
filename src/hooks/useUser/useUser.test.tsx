import { act, renderHook } from "@testing-library/react";
import { store } from "../../store/store";
import { User } from "../../types/user/types";
import { UserCredentials, CustomTokenPayload } from "./types";
import useUser from "./useUser";
import Wrapper from "../../mocks/Wrapper";
import decodeToken from "jwt-decode";
import { loginUserActionCreator } from "../../store/feature/users/usersSlice/usersSlice";
import { errorHandlers } from "../../mocks/handlers";
import { server } from "../../mocks/server";
import { toast } from "react-toastify";

jest.mock("jwt-decode", () => jest.fn());

const spy = jest.spyOn(store, "dispatch");

beforeAll(() => {
  jest.clearAllMocks();
});

const userCredentials: UserCredentials = {
  email: "jhonny@jhon.com",
  password: "12345678",
};

const mockTokenPayload: CustomTokenPayload = {
  email: "jhonny@jhon.com",
  id: "1",
};

const mockToken = "vik27634fvj";

const mockShowErrorModal = jest.spyOn(toast, "error");

describe("Given a useUser custom hook", () => {
  describe("When the loginUser function is called", () => {
    test("Then it should call the dispatch", async () => {
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), { wrapper: Wrapper });

      (decodeToken as jest.MockedFunction<typeof decodeToken>).mockReturnValue(
        mockTokenPayload
      );

      const mockLoginUser: User = {
        email: mockTokenPayload.email,
        id: mockTokenPayload.id,
        token: mockToken,
      };

      await loginUser(userCredentials);

      expect(spy).toHaveBeenCalledWith(loginUserActionCreator(mockLoginUser));
    });

    test("Then it should call the dispatch with the action openModalActionCreator", async () => {
      server.resetHandlers(...errorHandlers);
      const {
        result: {
          current: { loginUser },
        },
      } = renderHook(() => useUser(), {
        wrapper: Wrapper,
      });

      await act(async () => loginUser(userCredentials));

      expect(mockShowErrorModal).toHaveBeenCalled();
    });
  });
});
