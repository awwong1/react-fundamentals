'use strict';

import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    // State is initialized in the constructor for class components
    this.state = {
      txt: 'this is the state txt',
      cat: 0
    };
  }

  update(e) {
    // Use setState method to update state
    // Do not modify the state object directly
    // setState will not effect keys that are not specified (cat will still be 0)
    this.setState({txt: e.target.value});
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.update.bind(this)} />
        <h1>{this.state.txt}</h1>
      </div>
    );
  }
}


export default App;
