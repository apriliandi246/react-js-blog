import styled from "styled-components";

export const Message = styled.h1`
   font-size: 30px;
   line-height: 37px;
   margin: 90px auto;
   text-align: center;
   letter-spacing: 4px;
   font-family: monospace;
   color: ${({ theme }) => theme.fontColor};
`;
