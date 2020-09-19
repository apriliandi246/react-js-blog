import styled from 'styled-components';

export const ArticleContainer = styled.div`
   width: 100%;
   margin-top: 40px;
   box-sizing: border-box;
   padding: 45px 35px 25px 35px;
   background-color: ${(props) => props.theme === 'light' ? '#fafafa' : '#192734'};
   box-shadow: ${(props) => props.theme === 'light' ? '0 0 1px 1px #0000001a' : 'none'};
   border: ${(props) => props.theme === 'light' ? '1px solid #f3ebea' : '1px solid #38444d'};
`;
