'use strict';

import React from 'react';

class App extends React.Component {

  constructor() {
    super();
    this.state = {txt: ''};
    this.update = this.update.bind(this); // Shorthand so we don't have to call this.update.bind(this) in render()
  }

  update(e) {
    this.setState({txt: e.target.value});
  }

  render() {
    return (
      <div>
        <Widget txt={this.state.txt} update={this.update} />
        <Widget txt={this.state.txt} update={this.update} />
      </div>
    );
  }
}

// This is a child of the parent component 'App' with text and update functionality passed as Props
const Widget = (props) => {
  return (
    <div>
      <input type="text" onChange={props.update}/>
      <h1>{props.txt}</h1>
    </div>
  );
};

export default App;
