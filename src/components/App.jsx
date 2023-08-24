import React, { Component } from 'react';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <h2>Contacts</h2>
      </div>
    );
  }
}
