import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import axios from 'axios';
import Navbar from '../Navbar/index';
import Collapse from '../Collapse/index';
import Articles from '../Articles/index';
import { GlobalStyle } from './styled';
import { lightTheme, darkTheme } from '../Theme/index';
import './style.css';
import { apiEndpoint } from '../../config.json';


class Home extends Component {
   constructor(props) {
      super(props);

      this.state = {
         articles: [],
         articleTag: "",
         theme: window.localStorage.getItem('theme'),
      }

      this.changeTheme = this.changeTheme.bind(this);
      this.chooseAllrticles = this.chooseAllrticles.bind(this);
      this.chooseArticleTag = this.chooseArticleTag.bind(this);
   }

   componentDidMount() {
      this.getAllArticles(apiEndpoint);
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevState.articleTag !== this.state.articleTag) {
         this.getAllArticles(`${apiEndpoint}/tag/${this.state.articleTag}`);
      }
   }

   getAllArticles(endpoint) {
      axios.get(endpoint)
         .then((response) => {
            this.setState({
               articles: response.data
            });
         })
         .catch((ex) => {
            console.log(ex);
            if (ex.response.status === 404) {
               this.props.history.push('/');
            }
         });
   }

   chooseArticleTag(tag) {
      this.setState({ articleTag: tag });
   }

   chooseAllrticles() {
      this.getAllArticles(apiEndpoint);
   }

   changeTheme() {
      window.localStorage.setItem('theme', this.state.theme === 'light' ? 'dark' : 'light');
      this.setState({ theme: window.localStorage.getItem('theme') });
   }

   render() {
      const { articles, theme } = this.state;

      return (
         <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <React.Fragment>
               <GlobalStyle />

               <Navbar changeTheme={this.changeTheme} />

               <div className="container-home">
                  <Collapse
                     theme={theme}
                     chooseArticleTag={this.chooseArticleTag}
                     chooseAllrticles={this.chooseAllrticles}
                  />

                  <Articles
                     theme={theme}
                     articles={articles}
                  />
               </div>
            </React.Fragment>
         </ThemeProvider>
      );
   }
}

export default Home;
