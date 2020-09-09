import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Collapse from './Collapse';
import Articles from './Articles';
import { apiEndpoint } from '../../config.json';
import './home.css';


class Home extends Component {
   state = {
      articles: [],
      articleTag: ""
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
            if (ex.response.status === 404) {
               this.props.history.push('/');
            }
         });
   }

   chooseArticleTag = (tag) => {
      this.setState({ articleTag: tag });
   }

   chooseAllrticles = () => {
      this.getAllArticles(apiEndpoint);
   }

   render() {
      const { articles } = this.state;

      return (
         <React.Fragment>
            <Navbar />

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
