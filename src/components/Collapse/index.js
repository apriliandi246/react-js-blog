import React, { Component } from 'react';
import { CollapseButton, CollapseIcon, CollapseContent, CollapseTags, CollapseTag } from './styled';


class Collapse extends Component {
   constructor(props) {
      super(props);
      this.state = { displayValue: 'none' }
      this.openTags = this.openTags.bind(this);
   }

   setDisplayValue(value) {
      this.setState({ displayValue: value });
   }

   openTags() {
      this.state.displayValue === 'none' ? this.setDisplayValue('block') : this.setDisplayValue('none');
   }

   render() {
      const { displayValue } = this.state;
      const { chooseArticleTag, chooseAllrticles, theme } = this.props;
      const tags = ['html', 'css', 'nodejs', 'reactjs', 'mongodb', 'javascript', 'expressjs', 'technology'];

      return (
         <React.Fragment>
            <CollapseButton onClick={this.openTags} displayValue={displayValue}>
               Choose Tag
               <CollapseIcon>{displayValue === 'none' ? '+' : '-'}</CollapseIcon>
            </CollapseButton>

            <CollapseContent displayValue={displayValue}>
               <CollapseTags>
                  <CollapseTag onClick={chooseAllrticles} theme={theme}>all-articles</CollapseTag>

                  {tags.map((tag) =>
                     <CollapseTag key={tag} onClick={() => chooseArticleTag(tag)} theme={theme}>
                        {tag}
                     </CollapseTag>
                  )}
               </CollapseTags>
            </CollapseContent>
         </React.Fragment>
      );
   }
}

export default Collapse;
