import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Time } from '../../utils/time';
import Navbar from '../Home/Navbar';
import Collapse from '../Home/Collapse';
import '../Home/home.css'


class Tag extends Component {
   state = {
      articles: []
   }

   // get articles reference by tag
   getArticle() {
      axios.get(`http://localhost:4000/articles/tag/${this.props.match.params.articleTag}`)
         .then(response => {
            this.setState({ articles: response.data })
         })
   }

   componentDidMount() {
      this.getArticle();
   }

   // if user choose another tag
   componentDidUpdate(prevProps, prevState) {
      if (prevProps.match.params.articleTag !== this.props.match.params.articleTag) {
         this.getArticle();
      }
   }

   render() {
      const articles = this.state.articles;

      return (
         <React.Fragment>
            <Navbar />

            <div className="container-home">
               <Collapse />

               <div className="articles">
                  {articles.length === 0 ? <h1>No Article</h1> : articles.map((article) =>
                     <div key={article._id} className="articles__article">
                        <Link to={`/${article.slug}`} className="article__title">{article.title}</Link>
                        <p className="article__published">{new Time(article.createdAt).format('medium')}</p>
                        <div className="article__tag">{article.tag}</div>
                        <hr className="article__line" />
                     </div>
                  )}
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default Tag;
