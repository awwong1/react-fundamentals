'use strict';

import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {id: 1, name: 'Cat'},
        {id: 2, name: 'Dog'},
        {id: 3, name: 'Horse'},
        {id: 4, name: 'Pig'},
        {id: 5, name: 'Dragon'},
        {id: 6, name: 'Goat'},
      ]
    }
  }

  render() {
    let rows = this.state.data.map(person => {
      return <PersonRow key={person.id} data={person}/>
    });

    return (
      <table>
        <tbody>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
        {rows}
        </tbody>
      </table>
    )
  }
}

const PersonRow = (props) => {
  return <tr>
    <td>{props.data.id}</td>
    <td>{props.data.name}</td>
  </tr>
}

export default App;
