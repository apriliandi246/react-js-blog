import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import axios from 'axios';
import { Time } from '../../utils/time';
import './article.css';


class Article extends Component {
   state = {
      article: {}
   }

   componentDidMount() {
      // get the id of article
      const articleId = this.props.match.url;
      const id = articleId.slice(1).split('-');

      // get article reference by id
      axios.get(`http://localhost:4000/articles/${id[id.length - 1]}`)
         .then(response => {
            this.setState({ article: response.data })
         })
   }

   render() {
      const article = this.state.article;

      return (
         <React.Fragment>
            <div className="button-home">
               <Link to="/" className="to-home">&#10229; Home</Link>
            </div>

            <div className="container-article">
               <div className="head">
                  <h1 className="head__title">{article.title}</h1>
                  <p className="head__published">{new Time(article.createdAt).format('medium')}</p>
                  <div className="head__tag">{article.tag}</div>
               </div>

               <div className="article-body">
                  <ReactMarkdown source={article.markdown} />
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default Article;
