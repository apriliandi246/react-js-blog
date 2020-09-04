import React, { Component } from 'react';
import axios from 'axios';
import Navbar from '../Home/Navbar';
import Collapse from '../Home/Collapse';
import Articles from '../Home/Articles';
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

               <Articles articles={articles} />
            </div>
         </React.Fragment>
      );
   }
}

export default Tag;
