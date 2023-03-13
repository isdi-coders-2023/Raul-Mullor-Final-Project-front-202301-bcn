import styled from "styled-components";

const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  font-size: 20px;
  .login-form {
    &__section {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    &__field {
      font-size: 16px;
      height: 3.5rem;
      width: 18.75rem;
      border: 1px solid #000;
      border-radius: 12px;
      padding: 0 14px;
    }
  }
`;

export default LoginFormStyled;
