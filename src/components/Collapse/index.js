import React from 'react';
import { CollapseButton, CollapseIcon, CollapseContent, CollapseTags, CollapseTag } from './styled';


export default function Collapse({ chooseArticleTag, chooseAllrticles, theme }) {
   const [displayValue, setDisplayValue] = React.useState("none");
   const [tags] = React.useState(["html", "css", "nodejs", "reactjs", "mongodb", "javascript", "expressjs", "technology"]);

   function openTags() {
      if (displayValue === "none") {
         setDisplayValue("block");

      } else {
         setDisplayValue("none");
      }
   }

   return (
      <React.Fragment>
         <CollapseButton onClick={openTags} displayValue={displayValue}>
            Choose Tag
               <CollapseIcon>{displayValue === "none" ? "+" : "-"}</CollapseIcon>
         </CollapseButton>

         <CollapseContent displayValue={displayValue}>
            <CollapseTags>
               <CollapseTag onClick={chooseAllrticles} theme={theme}>all-articles</CollapseTag>

               {tags.map((tag) =>
                  <CollapseTag key={tag} onClick={() => chooseArticleTag(tag)} theme={theme}>
                     {tag}
                  </CollapseTag>
               )}
            </CollapseTags>
         </CollapseContent>
      </React.Fragment>
   );
}
