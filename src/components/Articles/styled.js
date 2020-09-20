import styled from 'styled-components';

export const ArticleContainer = styled.div`
   width: 100%;
   margin-top: 40px;
   box-sizing: border-box;
   padding: 45px 35px 25px 35px;
   border: ${({ theme }) => theme.border};
   box-shadow: ${({ theme }) => theme.collapseBoxShadow};
   transition: background-color 0.2s, border 0.2s, box-shadow 0.2s; 
   background-color: ${({ theme }) => theme.collapseContentBgColor};
`;
