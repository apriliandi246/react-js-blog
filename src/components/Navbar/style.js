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
   background-color: ${(props) => props.theme === 'light' ? '#fafafa' : '#15202b'};
   box-shadow: ${(props) => props.theme === 'light' ? '0 0 1.2px 1.2px #0000001a' : '0 0 2px 4px #404a4d33'};
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
