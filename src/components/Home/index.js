import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Spinner from '../Spinner';
import Collapse from './Collapse';
import Articles from './Articles';
import NoArticle from '../NotFound/NoArticle';
import { apiEndpoint } from '../../config.json';
import './home.css';


class Home extends Component {
   state = {
      articles: [],
      isLoading: false
   }

   componentDidMount() {
      axios.get(apiEndpoint)
         .then((response) => {
            this.setState({
               articles: response.data,
               isLoading: true
            });
         })
   }

   render() {
      const { articles, isLoading } = this.state;

      if (articles.length === 0 && isLoading === false) {
         return <Spinner />
      }

      if (articles.length === 0 && isLoading === true) {
         return <NoArticle />
      }

      return (
         <React.Fragment>
            <Navbar />

            <div className="container-home">
               <Collapse />

               <Articles
                  articles={articles}
                  isLoading={isLoading}
               />
            </div>
         </React.Fragment>
      );
   }
}

export default Home;
