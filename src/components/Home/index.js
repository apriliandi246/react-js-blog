import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Spinner from '../Spinner';
import Collapse from './Collapse';
import Articles from './Articles';
import './home.css';


class Home extends Component {
   state = {
      articles: []
   }

   componentDidMount() {
      axios.get('http://localhost:4000/articles')
         .then(response => {
            this.setState({ articles: response.data })
         })
   }

   render() {
      const { articles } = this.state;

      if (articles.length < 1) {
         return <Spinner />
      }

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

export default Home;
