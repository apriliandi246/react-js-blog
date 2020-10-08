import styled from "styled-components";

export const ArticleContainer = styled.div`
   width: 100%;
   margin-top: 50px;
   box-sizing: border-box;
   padding: 45px 35px 25px 35px;
   border: ${({ theme }) => theme.border};
   box-shadow: ${({ theme }) => theme.collapseBoxShadow};
   background-color: ${({ theme }) => theme.collapseContentBgColor};
`;
