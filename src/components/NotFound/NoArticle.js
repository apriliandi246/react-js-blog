import React from 'react';

const NoArticle = () => {
   const style = {
      color: "#fff",
      fontSize: "30px",
      textAlign: "center",
      fontWeight: "bolder",
      letterSpacing: "6px",
      margin: "150px auto",
      fontFamily: "monospace"
   }

   return (
      <div className="no-article">
         <h1 style={style}>Article doesn't exists right now 😅</h1>
      </div>
   );
}

export default NoArticle;
