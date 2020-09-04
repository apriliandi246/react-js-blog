import React, { Component } from 'react';
import axios from 'axios';
import Collapse from './Collapse';
import Articles from './Articles';
import Navbar from './Navbar';
import './home.css';


class Home extends Component {
   state = {
      articles: []
   }

   // get all article
   componentDidMount() {
      axios.get('http://localhost:4000/articles')
         .then(response => {
            this.setState({ articles: response.data })
         })
   }

   render() {
      return (
         <React.Fragment>
            <Navbar />

            <div className="container-home">
               <Collapse />

               <Articles
                  articles={this.state.articles}
               />
            </div>
         </React.Fragment>
      );
   }
}

export default Home;