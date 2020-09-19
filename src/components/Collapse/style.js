import styled from 'styled-components';

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
   color: ${(props) => props.theme === 'light' ? '#000000' : '#ffffff'};

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
   transition: background-color 0.2s;
   color: ${(props) => props.theme === 'light' ? '#000000' : '#ffffff'};
   background-color: ${(props) => props.theme === 'light' ? ' #fafafa' : '#253341'};
   box-shadow: ${(props) => props.theme === 'light' ? '0 0 1px 1px #0000001a' : 'none'};

   &:hover {
      background-color: ${(props) => props.theme === 'light' ? '#f3ebea' : '#38444d'};
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
   display: ${(props) => props.displayValue};
   background-color: ${(props) => props.theme === 'light' ? '#fafafa' : '#192734'};
   box-shadow: ${(props) => props.theme === 'light' ? '0 0 1px 1px #0000001a' : 'none'};
   border-left: ${(props) => props.theme === 'light' ? '1px solid #f3ebea' : '1px solid #253341'};
   border-right: ${(props) => props.theme === 'light' ? '1px solid #f3ebea' : '1px solid #253341'};
   border-bottom: ${(props) => props.theme === 'light' ? '1px solid #f3ebea' : '1px solid #253341'};
`;
