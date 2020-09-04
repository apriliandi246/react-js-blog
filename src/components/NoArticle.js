import React, { Component } from 'react';


class NoArticle extends Component {
   style = {
      fontSize: "33px",
      textAlign: "center",
      fontWeight: "bolder",
      letterSpacing: "6px",
      margin: "100px auto",
      fontFamily: "monospace"
   }

   render() {
      return (
         <div className="no-article">
            <h1 style={this.style}>No Article</h1>
         </div>
      );
   }
}

export default NoArticle;
