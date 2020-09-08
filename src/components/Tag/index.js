import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../Home/Navbar';
import Collapse from '../Home/Collapse';
import Articles from '../Home/Articles';
import { apiEndpoint } from '../../config.json';
import '../Home/home.css'


class Tag extends Component {
   state = {
      articles: []
   }

   getArticle() {
      axios.get(`${apiEndpoint}/tag/${this.props.match.params.articleTag}`)
         .then((response) => {
            this.setState({ articles: response.data })
         })
         .catch((ex) => {
            if (ex.response.status === 404) {
               this.props.history.push('/');
            }
         });
   }

   componentDidMount() {
      this.getArticle();
   }

   componentDidUpdate(prevProps, prevState) {
      if (prevProps.match.params.articleTag !== this.props.match.params.articleTag) {
         this.getArticle();
      }
   }

   render() {
      const { articles } = this.state;

      return (
         <React.Fragment>
            <Navbar />

            <div className="container-home">
               <Collapse />

               <Articles
                  articles={articles}
               />
            </div>
         </React.Fragment>
      );
   }
}

export default Tag;
