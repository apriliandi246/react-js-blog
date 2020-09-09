import React, { Component } from 'react';


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
      const { chooseArticleTag, chooseAllrticles } = this.props;

      return (
         <React.Fragment>
            <div className="collapse">
               <button
                  className="collapse__button"
                  style={displayValue === 'none' ? null : { backgroundColor: '#38444d' }}
                  onClick={this.openTags}>
                  Choose Tag <i className="collapse-button__icon">{displayValue === 'none' ? '+' : '-'}</i>
               </button>

               <div className="collapse__content" style={{ display: displayValue }}>
                  <ul className="collapse-content__list-tag">
                     <p onClick={chooseAllrticles} className="link-tag">all-articles</p>

                     {tags.map((tag) =>
                        <p key={tag} className="link-tag" onClick={() => chooseArticleTag(tag)}>
                           {tag}
                        </p>
                     )}
                  </ul>
               </div>
            </div>
         </React.Fragment>
      );
   }
}

export default Collapse;
