import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Time } from '../../utils/time';
import NoArticle from '../NoArticle/index';
import './style.css';


class Articles extends Component {
   render() {
      const { articles } = this.props;

      return (
         <React.Fragment>
            {articles.length === 0 ? <NoArticle /> : (
               <div className="articles">
                  {articles.map((article) =>
                     <div key={article._id} className="articles__article">
                        <Link to={`/${article.slug}`} className="article__title">{article.title}</Link>
                        <p className="article__published">{new Time(article.createdAt).format('medium')}</p>
                        <span className="article__tag">{article.tag}</span>
                        <hr className="article__line" />
                     </div>
                  )}
               </div>
            )}
         </React.Fragment>
      );
   }
}

export default Articles;