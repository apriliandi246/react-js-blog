import React from "react";
import { NavbarStyle, NavbarLogo } from "./styled";

export const Navbar = React.memo(({ changeTheme }) => {
   return (
      <NavbarStyle>
         <NavbarLogo onClick={changeTheme} />
      </NavbarStyle>
   );
});
