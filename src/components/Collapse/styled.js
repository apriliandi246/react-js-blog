import styled from "styled-components";

export const CollapseIcon = styled.i`
   float: right;
   font-weight: bolder;
`;

export const CollapseTags = styled.ul`
   display: flex;
   flex-wrap: wrap;
   margin-bottom: 25px;
   align-content: center;
   justify-content: center;
`;

export const CollapseTag = styled.p`
   cursor: pointer;
   margin-top: 20px;
   margin-right: 28px;
   letter-spacing: 2px;
   text-decoration: none;
   transition: color 0.2s;

   &:hover {
      text-decoration: underline;
   }
`;

export const CollapseButton = styled.button`
   width: 100%;
   border: none;
   outline: none;
   padding: 15px;
   cursor: pointer;
   font-size: 1.1em;
   text-align: left;
   font-family: monospace;
   box-sizing: border-box;
   color: ${({ theme }) => theme.fontColor};
   background-color: ${({ theme }) => theme.collapseBgColor};
   box-shadow: ${({ theme }) => theme.collapseBoxShadow};

   &:hover {
      background-color: ${({ theme }) => theme.collapseBgColor};
   }
`;

export const CollapseContent = styled.div`
   padding: 27px;
   font-size: 1.2em;
   overflow: hidden;
   line-height: 24px;
   letter-spacing: 1px;
   box-sizing: border-box;
   font-family: monospace;
   color: ${({ theme }) => theme.fontColor};
   display: none;
   box-shadow: ${({ theme }) => theme.collapseBoxShadow};
   border-left: ${({ theme }) => theme.collapseBorderContent};
   border-right: ${({ theme }) => theme.collapseBorderContent};
   border-bottom: ${({ theme }) => theme.collapseBorderContent};
   background-color: ${({ theme }) => theme.collapseContentBgColor};
`;
