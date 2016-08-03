'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {
      increasing: false
    }
  }

  update() {
    ReactDOM.render(
      <App val={this.props.val + 1}/>,
      document.getElementById('app')
    );
  }

  // Can do modifications before props are propagated to the component
  componentWillReceiveProps(nextProps) {
    this.setState({increasing: nextProps.val > this.props.val});
  }

  // Return a boolean here, determines if the component should re-render
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.val % 5 === 0;
  }

  render() {
    console.log(this.state.increasing);
    return <button onClick={this.update}>{this.props.val}</button>
  }

  // Method that is called only if the component is re-rendered
  componentDidUpdate(prevProps, prevState) {
    console.log('prevProps', prevProps);
  }
}

App.defaultProps = {
  val: 0
};

export default App;
