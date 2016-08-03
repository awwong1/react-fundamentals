'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    // all React Components have props. These are attributes you pass to the component.
    let txt = this.props.txt;
    return <h1>{txt}</h1>
  }
}

// It is a good idea to define all React prop types that we use.
App.propTypes = {
  txt: React.PropTypes.string,
  cat: React.PropTypes.number.isRequired
};

// You can also specify default properties of any React Component
App.defaultProps = {
  txt: 'This is the default text!',
  cat: 0
};

ReactDOM.render(
  //<App txt="this is the props value" cat={5} />,
  <App cat={5} />,
  document.getElementById('app')
);
