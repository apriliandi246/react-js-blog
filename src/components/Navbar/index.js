import React from 'react';
import { NavbarStyle, NavbarLogo } from './style';

const Navbar = (props) => {
   const theme = localStorage.getItem('theme');

   return (
      <NavbarStyle theme={theme}>
         <NavbarLogo onClick={props.changeTheme} />
      </NavbarStyle>
   );
}

export default Navbar;
