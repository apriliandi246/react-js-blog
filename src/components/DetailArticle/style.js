import { createGlobalStyle } from 'styled-components';

export const styleHomeButton = {
   width: '92%',
   fontWeight: '480',
   margin: '38px auto 50px auto'
}

export const BodyBackgroundColor = createGlobalStyle`
   body { 
      background-color: ${(props) => props.theme === 'light' ? '#f5f5f5;' : '#15202b;'}
   }

   .container-article {
      color: ${(props) => props.theme === 'light' ? '#000000' : '#ffffff'};
   }

   .article-body a {
      transition: color 0.2s;
      color: ${(props) => props.theme === 'light' ? '#000000' : '#ffffff'};
   }

   .article-body blockquote {
      color: ${(props) => props.theme === 'light' ? '#000000' : '#ffffff'};
      background-color: ${(props) => props.theme === 'light' ? '#fafafa' : '#192734'};
      box-shadow: ${(props) => props.theme === 'light' ? '0 0 1px 1px #0000001a' : 'none'};
      border-left: 10px solid ${(props) => props.theme === 'light' ? '#cccccc' : '#38444d'};
   }

   .article-body table,
   .article-body th,
   .article-body tr,
   .article-body td {
   border: 3px solid ${(props) => props.theme === 'light' ? '#000000' : '#ffffff'};
}
`;
