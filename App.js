'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
    this.update = this.update.bind(this);
  }

  update() {
    this.setState({val: ( this.state.val || 0 ) + 1});
  }

  // Calls before the component mounts
  componentWillMount() {
    console.log('mounting');
  }

  // After component mounts, render once and whenever the dom changes
  render() {
    console.log('rendering');
    return <button onClick={this.update}>{this.state.val}</button>
  }

  // Calls after the component mounts
  componentDidMount() {
    console.log('mounted');
  }

  // Calls before the component unmounts
  componentWillUnmount() {
    console.log('bye');
  }
}

class Wrapper extends React.Component {

  constructor() {
    super();
    this.mount = this.mount.bind(this);
    this.unmount = this.unmount.bind(this);
  }

  mount() {
    ReactDOM.render(<App />, document.getElementById('a'));
  }

  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById('a'));
  }

  render() {
    return (
      <div>
        <button onClick={this.mount}>Mount</button>
        <button onClick={this.unmount}>Unmount</button>
        <div id="a"></div>
      </div>
    );
  }
}

export default Wrapper;
