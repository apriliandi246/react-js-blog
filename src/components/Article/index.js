import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Time } from '../../utils/time';
import axios from 'axios';
import './article.css';
import Spinner from '../Spinner';


class Article extends Component {
   state = {
      article: {}
   }

   componentDidMount() {
      axios.get(`http://localhost:4000/articles/${this.props.match.url}`)
         .then(response => {
            this.setState({ article: response.data })
         })
   }

   render() {
      const { article } = this.state;

      if (article.length !== 1) {
         return <Spinner />
      }

      return (
         <React.Fragment>
            <div className="button-home">
               <Link to="/" className="to-home">&#10229; Home</Link>
            </div>

            <div className="container-article">
               <div className="head">
                  <h1 className="head__title">{article[0].title}</h1>
                  <p className="head__published">
                     {new Time(article[0].createdAt).format('medium')}
                  </p>
                  <div className="head__tag">{article[0].tag}</div>
               </div>

               <div className="article-body">
                  <ReactMarkdown
                     source={article[0].markdown}
                  />
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default Article;
