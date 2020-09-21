import styled from 'styled-components';
import Logo from './logo.png';

export const NavbarStyle = styled.nav` 
   top: 0;
   left: 0;
   right: 0;
   height: 60px;
   display: flex;
   color: #ffffff;
   position: fixed;
   overflow: hidden;
   align-items: center;
   justify-content: space-around;
   box-shadow: ${({ theme }) => theme.navbarBoxShadow};
   background-color: ${({ theme }) => theme.backgroundComponent};
`;

export const NavbarLogo = styled.div`
   width: 64px;
   height: 64px;
   cursor: pointer;
   background-size: cover;
   background-repeat: no-repeat;
   background-position: 0px 2px;
   background-image: url(${Logo});
   box-shadow: 0 0 1px 1px #404a4d33;
`;
