import React, { Component } from 'react';
import Collapse from './Collapse';
import Articles from './Articles';
import Navbar from './Navbar';
import './home.css';


class Home extends Component {
   render() {
      return (
         <React.Fragment>
            <Navbar />

            <div className="container-home">
               <Collapse />

               <Articles />
            </div>
         </React.Fragment>
      );
   }
}

export default Home;