import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";

const Navbar = (): JSX.Element => {
  return (
    <NavbarStyled>
      <NavLink className={"link"} to={"/Characters"}>
        Characters
      </NavLink>
      <NavLink className={"link"} to={"/Log Out"}>
        Log Out
      </NavLink>
    </NavbarStyled>
  );
};

export default Navbar;
