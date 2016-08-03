'use strict';

import React from 'react';

class App extends React.Component {
  render() {
    // Can also include other components as well as text
    return <Button>I <Heart /> React</Button>;
  }
}

class Button extends React.Component {
  render() {
    // this.props.children directly references the values between the tags in App
    return <button>{this.props.children}</button>;
  }
}

const Heart = () => {
  // Here we have a span with a bootstrap glyphicon heart
  return <span className="glyphicon glyphicon-heart"></span>
};

export default App;
