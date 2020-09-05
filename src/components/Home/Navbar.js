import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
   return (
      <React.Fragment>
         <nav className="navbar">
            <Link to="/" className="navbar__logo">SOPHIE</Link>
         </nav>
      </React.Fragment>
   );
}

export default Navbar;
