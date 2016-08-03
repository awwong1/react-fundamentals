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
    // Can be used to set state just before the component is rendered to the DOM, in this case a multiplier
    this.setState({m: 2});
  }

  // After component mounts, render once and whenever the dom changes
  render() {
    console.log('rendering');
    return <button onClick={this.update}>{this.state.val * this.state.m}</button>
  }

  // Calls after the component mounts
  componentDidMount() {
    // Can be used to begin polling, or here it will call update 2 times per second
    this.inc = setInterval(this.update, 500);
    console.log(ReactDOM.findDOMNode(this));
  }

  // Calls before the component unmounts
  componentWillUnmount() {
    // Can be used to clean up the state of the application
    clearInterval(this.inc);
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
