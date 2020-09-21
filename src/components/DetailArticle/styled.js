import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   body { 
      background-color: ${({ theme }) => theme.body};
   }

   .container-article {
      color: ${({ theme }) => theme.fontColor};
   }

   .article-body a {
      color: ${({ theme }) => theme.fontColor};
   }

   .article-body blockquote {
      color: color: ${({ theme }) => theme.fontColor};
      border-left: ${({ theme }) => theme.borderQuote};
      box-shadow: ${({ theme }) => theme.collapseBoxShadow};
      background-color: ${({ theme }) => theme.collapseContentBgColor};
   }

   .article-body table,
   .article-body th,
   .article-body tr,
   .article-body td {
      border: ${({ theme }) => theme.tableBorder};
   }
`;
