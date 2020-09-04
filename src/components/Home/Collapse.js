import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Collapse extends Component {
   state = {
      displayValue: 'none'
   }

   setDisplayValue(value) {
      this.setState({ displayValue: value });
   }

   openTags = () => {
      this.state.displayValue === 'none' ? this.setDisplayValue('block') : this.setDisplayValue('none');
   }

   render() {
      const { displayValue } = this.state;

      return (
         <React.Fragment>
            <div className="collapse">
               <button className="collapse__button" style={displayValue === 'none' ? null : { backgroundColor: '#38444d' }} onClick={this.openTags}>
                  Choose Tag <i className="collapse-button__icon">{displayValue === 'none' ? '+' : '-'}</i>
               </button>

               <div className="collapse__content" style={{ display: displayValue }}>
                  <ul className="collapse-content__list-tag">
                     <li><Link to="/" className="link-tag">All Articles</Link></li>
                     <li><Link to="/tag/html" className="link-tag">HTML</Link></li>
                     <li><Link to="/tag/css" className="link-tag">CSS</Link></li>
                     <li><Link to="/tag/nodejs" className="link-tag">Node.js</Link></li>
                     <li><Link to="/tag/reactjs" className="link-tag">React.js</Link></li>
                     <li><Link to="/tag/mongodb" className="link-tag">MongoDB</Link></li>
                     <li><Link to="/tag/markdown" className="link-tag">Markdown</Link></li>
                     <li><Link to="/tag/javascript" className="link-tag">Javascript</Link></li>
                     <li><Link to="/tag/expressjs" className="link-tag">Express.js</Link></li>
                  </ul>
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default Collapse;
