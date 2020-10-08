import React from "react";
import { NavbarStyle, NavbarLogo } from "./styled";


export default function Navbar({ changeTheme }) {
   return (
      <NavbarStyle>
         <NavbarLogo onClick={changeTheme} />
      </NavbarStyle>
   );
}
