import React, { Component } from 'react';

export const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {' '}
            {name} : {number}{' '}
          </p>
          <button type="button" onClick={() => onDelete(id)}>
            Delete Contact
          </button>
        </li>
      ))}
    </ul>
  );
};
