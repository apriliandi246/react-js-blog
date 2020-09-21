import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import { Time } from '../../utils/time';
import Spinner from '../Spinner';
import { darkTheme, lightTheme } from '../Theme/index'
import { GlobalStyle } from './styled';
import './style.css';
import { apiEndpoint } from '../../config.json';


class Article extends Component {
   constructor(props) {
      super(props);

      this.state = {
         article: [],
         theme: window.localStorage.getItem('theme')
      };
   }

   componentDidMount() {
      axios.get(`${apiEndpoint}/slug${this.props.match.url}`)
         .then(response => {
            this.setState({ article: response.data })
         })
         .catch((ex) => {
            if (ex.response.status === 404) {
               this.props.history.push('/');
            }
         });
   }

   render() {
      const { article, theme } = this.state;

      if (article.length === 0) {
         return <Spinner />
      }

      return (
         <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <React.Fragment>
               <GlobalStyle />

               <div className="button-home">
                  <Link to="/" className="to-home" style={{ color: theme === 'light' ? '#000000' : '#ffffff' }}>&#10229; Home</Link>
               </div>

               <div className="container-article">
                  <div className="head">
                     <h1 className="head__title">{article[0].title}</h1>
                     <p className="head__published">{new Time(article[0].createdAt).format('medium')}</p>
                     <span className="head__tag">{article[0].tag}</span>
                  </div>

                  <div className="article-body">
                     <ReactMarkdown
                        source={article[0].markdown}
                     />
                  </div>
               </div>
            </React.Fragment>
         </ThemeProvider>
      );
   }
}

export default Article;
