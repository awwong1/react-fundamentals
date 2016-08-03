'use strict';

import React from 'react';

class App extends React.Component {
  render() {
    // Render can only return one root node,
    // parenthesis wrapping for whitespace
    return (
      <div>
        <h1>Hello World!</h1>
        <b>Bold</b>
      </div>
    );
  }
}


export default App;
