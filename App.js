'use strict';

import React from 'react';

// Using a higher order component to wrap inner components to share functionality
let Mixin = InnerComponent => class extends React.Component {
  constructor() {
    super();
    this.update = this.update.bind(this);
    this.state = {val: 0};
  }

  update() {
    this.setState({val: (this.state.val || 0) + 1});
  }

  componentWillMount() {
    console.log('will mount');
  }

  render() {
    return <InnerComponent
      update={this.update}
      {...this.state}
      {...this.props}
    />
  }

  componentDidMount() {
    console.log('mounted');
  }
};

// Mixin functionality on click
const Button = (props) => <button onClick={props.update}>{props.txt} - {props.val}</button>;

// Mixin functionality on mouse move
const Label = (props) => <label onMouseMove={props.update}>{props.txt} - {props.val}</label>;

let ButtonMixed = Mixin(Button);
let LabelMixed = Mixin(Label);

class App extends React.Component {
  render() {
    return (
      <div>
        <ButtonMixed txt="Button"/>
        <br />
        <LabelMixed txt="Label"/>
      </div>
    )
  }

}

export default App;
