import { toast } from "react-toastify";
import { showErrorToast } from "./modals";

beforeAll(() => {
  jest.clearAllMocks();
});

jest.mock("react-toastify", () => ({
  toast: {
    error: jest.fn(),
    success: jest.fn(),
  },
}));

describe("Given the showErrorToast function", () => {
  describe("When it receives a message 'Wrong credentials'", () => {
    test("Then its toast.error function should be called with its error message", () => {
      const errorMessage = "Wrong credentials";
      const errorOptions = {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      };

      showErrorToast(errorMessage);

      expect(toast.error).toHaveBeenCalledWith(errorMessage, errorOptions);
    });
  });
});
