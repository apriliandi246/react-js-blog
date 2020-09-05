import React from 'react';

const NoArticle = () => {
   const style = {
      fontSize: "33px",
      textAlign: "center",
      fontWeight: "bolder",
      letterSpacing: "6px",
      margin: "100px auto",
      fontFamily: "monospace"
   }

   return (
      <div className="no-article">
         <h1 style={style}>No Article</h1>
      </div>
   );
}

export default NoArticle;
