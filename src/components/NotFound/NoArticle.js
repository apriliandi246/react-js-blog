import React from 'react';

const NoArticle = () => {
   const style = {
      color: "#fff",
      fontSize: "27px",
      lineHeight: "37px",
      textAlign: "center",
      fontWeight: "bolder",
      letterSpacing: "6px",
      margin: "90px auto",
      fontFamily: "monospace",
      textShadow: "1px 1px 10px black"
   }

   return (
      <div className="no-article">
         <h1 style={style}>Article doesn't exists right now</h1>
      </div>
   );
}

export default NoArticle;
