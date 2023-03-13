import { NavLink } from "react-router-dom";
import NavbarStyled from "./NavbarStyled";

const Navbar = (): JSX.Element => {
  return (
    <NavbarStyled>
      <NavLink
        className={({ isActive }) => (isActive ? "blue" : "brown")}
        to={"/Characters"}
      >
        Characters
      </NavLink>
      <NavLink
        className={({ isActive }) => (isActive ? "blue" : "brown")}
        to={"/Log Out"}
      >
        Log Out
      </NavLink>
    </NavbarStyled>
  );
};

export default Navbar;
