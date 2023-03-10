import styled from "styled-components";

const ButtonStyled = styled.button`
  background-color: ${(props) => props.theme.colors.mainColorButton};
  height: 50px;
  width: 304px;
  color: ${(props) => props.theme.colors.mainColorText};
  font-weight: 400;
  border: none;
  border-radius: 15px;
`;

export default ButtonStyled;
