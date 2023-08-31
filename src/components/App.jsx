import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    name: '',
    filter: '',
  };
  onChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  addContact = newContact => {
    const { contacts } = this.state;
    const isContactExist = contacts.find(
      contact => contact.name === newContact.name
    );

    if (isContactExist) {
      alert(`${newContact.name} is already exist`);
    }

    this.setState(prevState => {
      return { contacts: [...prevState.contacts, newContact] };
    });
  };

  deleteContact = id => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAdd={this.addContact} />
        <h2>Contacts</h2>
        <Filter filter={this.state.filter} onChange={this.onChange} />
        <ContactList
          contacts={this.getFilteredContacts()}
          onDelete={this.deleteContact}
        />
      </div>
    );
  }
}
