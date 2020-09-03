import React, { Component } from 'react';

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
                     <li><a href="#">All Articles</a></li>
                     <li><a href="#">HTML</a></li>
                     <li><a href="#">CSS</a></li>
                     <li><a href="#">Node.js</a></li>
                     <li><a href="#">React.js</a></li>
                     <li><a href="#">MongoDB</a></li>
                     <li><a href="#">Markdown</a></li>
                     <li><a href="#">Javascript</a></li>
                     <li><a href="#">Express.js</a></li>
                  </ul>
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default Collapse;