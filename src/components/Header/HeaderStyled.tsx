import styled from "styled-components";

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: flex-end;
  flex-direction: column;
  align-items: center;
  width: 100%;
  position: relative;

  nav {
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
  }
`;

export default HeaderStyled;
