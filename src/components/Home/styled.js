import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
   body { 
      transition: background-color 0.2s; 
      background-color: ${({ theme }) => theme.body};
   }
`;
