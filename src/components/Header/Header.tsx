import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <img
        src="images/logo.png"
        alt="Pathfinder juego de rol"
        width={350}
        height={75}
        className="logo__image"
      />
    </HeaderStyled>
  );
};

export default Header;
