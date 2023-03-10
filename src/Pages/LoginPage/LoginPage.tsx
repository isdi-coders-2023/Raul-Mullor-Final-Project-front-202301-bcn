import LoginForm from "../../components/LoginForm/LoginForm";
import LoginPageStyled from "./LoginPageStyled";

const LoginPage = (): JSX.Element => {
  return (
    <LoginPageStyled>
      <LoginForm />
      <div className="link">
        Not a member? <a href="sign up">Sign up</a>
      </div>
    </LoginPageStyled>
  );
};

export default LoginPage;
