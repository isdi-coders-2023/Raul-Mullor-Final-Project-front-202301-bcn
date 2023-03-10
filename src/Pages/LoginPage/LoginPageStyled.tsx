import styled from "styled-components";

const LoginPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  justify-content: center;
  align-items: center;

  a {
    color: ${(props) => props.theme.colors.secondaryColorText};
  }
`;

export default LoginPageStyled;
