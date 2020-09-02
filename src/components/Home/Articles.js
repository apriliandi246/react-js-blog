import React, { Component } from 'react';

class Articles extends Component {
   render() {
      return (
         <React.Fragment>
            <div className="articles">
               <div className="articles__article">
                  <a href="#" className="article__title">A JavaScript library for building user interfaces</a>
                  <p className="article__published">April, 06 2000</p>
                  <div className="article__tag">flutter</div>
                  <hr className="article__line" />
               </div>

               <div className="articles__article">
                  <a href="#" className="article__title">What is Flutter</a>
                  <p className="article__published">April, 06 2000</p>
                  <div className="article__tag">flutter</div>
                  <hr className="article__line" />
               </div>

               <div className="articles__article">
                  <a href="#" className="article__title">What is Flutter</a>
                  <p className="article__published">April, 06 2000</p>
                  <div className="article__tag">flutter</div>
                  <hr className="article__line" />
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default Articles;