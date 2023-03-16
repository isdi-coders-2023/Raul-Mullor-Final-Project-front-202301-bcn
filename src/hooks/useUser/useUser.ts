import { useAppDispatch } from "../../store/hooks";
import decodeToken from "jwt-decode";
import { User } from "../../types/user/types";
import { CustomTokenPayload, LoginResponse, UserCredentials } from "./types";
import { loginUserActionCreator } from "../../store/feature/users/usersSlice/usersSlice";
import { showErrorToast } from "../../modals/modals";

interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

const useUser = (): UseUserStructure => {
  const dispatch = useAppDispatch();

  const apiUrl = process.env.REACT_APP_URL_API!;
  const usersEndPoint = "/users";
  const loginEndPoint = "/login";

  const loginUser = async (userCredentials: UserCredentials) => {
    try {
      const response = await fetch(
        `${apiUrl}${usersEndPoint}${loginEndPoint}`,
        {
          method: "POST",
          body: JSON.stringify(userCredentials),
          headers: { "Content-Type": "application/json" },
        }
      );

      const { token } = (await response.json()) as LoginResponse;

      const tokenPayload: CustomTokenPayload = decodeToken(token);

      const { id, email } = tokenPayload;

      const userLogin: User = { email, id, token };

      dispatch(loginUserActionCreator(userLogin));

      localStorage.setItem("token", token);
    } catch (error) {
      showErrorToast("Invalid credentials");
    }
  };

  return { loginUser };
};

export default useUser;
