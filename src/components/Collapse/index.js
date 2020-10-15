import React from "react";
import {
   CollapseButton,
   CollapseIcon,
   CollapseContent,
   CollapseTags,
   CollapseTag,
} from "./styled";

export default function Collapse({ chooseArticleTag, chooseAllrticles }) {
   const collapseContentRef = React.useRef(null);

   const tags = React.useRef([
      "html",
      "css",
      "nodejs",
      "reactjs",
      "mongodb",
      "javascript",
      "expressjs",
      "technology",
   ]);

   function openTags() {
      const collapseContent = collapseContentRef.current.style;

      if (
         collapseContent.display === "none" ||
         collapseContent.display === ""
      ) {
         collapseContent.display = "block";
      } else {
         collapseContent.display = "none";
      }
   }

   return (
      <React.Fragment>
         <CollapseButton onClick={openTags}>
            Choose Tag
            <CollapseIcon>+</CollapseIcon>
         </CollapseButton>

         <CollapseContent ref={collapseContentRef}>
            <CollapseTags>
               <CollapseTag onClick={chooseAllrticles}>
                  all-articles
               </CollapseTag>

               {tags.current.map((tag) => (
                  <CollapseTag key={tag} onClick={() => chooseArticleTag(tag)}>
                     {tag}
                  </CollapseTag>
               ))}
            </CollapseTags>
         </CollapseContent>
      </React.Fragment>
   );
}
