import React from 'react';
import { NavbarStyle, NavbarLogo } from './styled';


const Navbar = (props) => {
   return (
      <NavbarStyle>
         <NavbarLogo onClick={props.changeTheme} />
      </NavbarStyle>
   );
}

export default Navbar;
