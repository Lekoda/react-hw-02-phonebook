import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  addContact = newContact => {
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
      </div>
    );
  }
}
