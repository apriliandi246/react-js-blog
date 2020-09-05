import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Collapse extends Component {
   state = {
      displayValue: 'none',
      tags: ['html', 'css', 'nodejs', 'reactjs', 'mongodb', 'markdown', 'javascript', 'expressjs']
   }

   setDisplayValue(value) {
      this.setState({ displayValue: value });
   }

   openTags = () => {
      this.state.displayValue === 'none' ? this.setDisplayValue('block') : this.setDisplayValue('none');
   }

   render() {
      const { tags, displayValue } = this.state;

      return (
         <React.Fragment>
            <div className="collapse">
               <button className="collapse__button" style={displayValue === 'none' ? { backgroundColor: '#253341' } : { backgroundColor: '#38444d' }} onClick={this.openTags}>
                  Choose Tag <i className="collapse-button__icon">{displayValue === 'none' ? '+' : '-'}</i>
               </button>

               <div className="collapse__content" style={{ display: displayValue }}>
                  <ul className="collapse-content__list-tag">
                     {tags.map((tag) =>
                        <li>
                           <Link
                              to={`/tag/${tag}`}
                              className="link-tag">
                              {tag}
                           </Link>
                        </li>
                     )}
                  </ul>
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default Collapse;
