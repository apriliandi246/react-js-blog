import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import axios from 'axios';
import Navbar from '../Navbar/index';
import Collapse from '../Collapse/index';
import Articles from '../Articles/index';
import { apiEndpoint } from '../../config.json';
import './style.css';


const BodyBackgroundColor = createGlobalStyle`
   body { background-color: ${(props) => props.theme === 'light' ? '#f5f5f5' : '#15202b'}}
`;


class Home extends Component {
   constructor(props) {
      super(props);

      this.state = {
         theme: "",
         articles: [],
         articleTag: ""
      }

      this.changeTheme = this.changeTheme.bind(this);
      this.chooseAllrticles = this.chooseAllrticles.bind(this);
      this.chooseArticleTag = this.chooseArticleTag.bind(this);
   }

   componentDidMount() {
      if (localStorage.getItem('theme') === 'light') {
         localStorage.setItem('theme', 'light');
         this.setState({ theme: localStorage.getItem('theme') });

      } else if (localStorage.getItem('theme') === 'dark') {
         localStorage.setItem('theme', 'dark');
         this.setState({ theme: localStorage.getItem('theme') });

      } else {
         localStorage.setItem('theme', 'light');
         this.setState({ theme: localStorage.getItem('theme') });
      }

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
      localStorage.setItem('theme', localStorage.getItem('theme') === 'light' ? 'dark' : 'light');
      this.setState({ theme: localStorage.getItem('theme') });
   }

   render() {
      const { articles, theme } = this.state;

      return (
         <React.Fragment>
            <BodyBackgroundColor theme={theme} />

            <Navbar changeTheme={this.changeTheme} />

            <div className="container-home">
               <Collapse
                  chooseArticleTag={this.chooseArticleTag}
                  chooseAllrticles={this.chooseAllrticles}
               />

               <Articles
                  articles={articles}
               />
            </div>
         </React.Fragment>
      );
   }
}

export default Home;
