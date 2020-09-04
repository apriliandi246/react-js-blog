import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Time } from '../../utils/time';


class Articles extends Component {
   render() {
      const articles = this.props.articles;

      return (
         <React.Fragment>
            <div className="articles">
               {articles.map((article) =>
                  <div key={article._id} className="articles__article">
                     <Link to={`/${article.slug}`} className="article__title">{article.title}</Link>
                     <p className="article__published">{new Time(article.createdAt).format('medium')}</p>
                     <div className="article__tag">{article.tag}</div>
                     <hr className="article__line" />
                  </div>
               )}
            </div>
         </React.Fragment>
      );
   }
}

export default Articles;