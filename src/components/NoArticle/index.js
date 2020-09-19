import React, { useContext } from 'react';
import styled from 'styled-components';
import DarkMode from '../Theme';

const Message = styled.h1`
   font-size: 30px;
   line-height: 37px;
   margin: 90px auto;
   text-align: center;
   letter-spacing: 4px;
   font-family: monospace;
   color: ${(props) => props.theme === 'light' ? '#000000' : '#ffffff'};
`;

const NoArticle = () => {
   const theme = useContext(DarkMode);
   return <Message theme={theme}>Article Not Found</Message>
}

export default NoArticle;
