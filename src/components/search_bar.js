import React, { Component } from 'react'; 
/** 
Need to import React for all of our components because
when compiling, React.createElement will be called. 

{ Component } = import react and pull off property Component as a 
variable Component. 

Declare new class with name SearchBar
Create a instance of this class with 'new SearchBar'

'class SearchBar' - create class called SearchBar
'extends Component' - give this class all of the functionality
from the class React Component. 
*/

class SearchBar extends Component {
  // Initialize state in class based component. The constructor is the only
  // method that is called automatically when creating an instance. 
  constructor(props) {
    super(props); 
    // Component its self has its own construcutor function. When we define a 
    // method that is already defined in the parent class (Component) we can 
    // call that method in the parent class with super.
    this.state = { term: ''}; // Set term to empty string during creation 
  } 
  
  // Event handle detects input change & runs code.
  // accepts event object that describes what happened. 
  render() { // name of event 'onChange', then call method of event handler. 
    return (
      <div className="search-bar">  
        <input 
          // Controlled component. When the user enters something, they didn't
          // change the input value. They only ilicited the onChange method and 
          // the state is updated (setState), which causes the value to update.  
          value={this.state.term} 
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
  
  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

// Make is useable in index.js
export default SearchBar;
