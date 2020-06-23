import React from 'react'
class Columns extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.textInput = React.createRef(); this.focusTextInput = this.focusTextInput.bind(this);
  }
  focusTextInput() {
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
    const node =  this.textInput.current;
    console.log(node);
  }

  render() {
    return (
      // <div>
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      
      {/* </div> */}
      
        <input
          type="text"
          ref={this.textInput} />        <input
          type="button"
          value="Focus the text input"
          onClick={this.focusTextInput}
        />
        
        </React.Fragment>
      );
  }
}

export default Columns 