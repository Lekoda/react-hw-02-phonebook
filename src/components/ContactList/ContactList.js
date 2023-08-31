import React, { Component } from 'react';

export const ContactList = ({ contacts }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <li key={id}>
          <p>
            {' '}
            {name} : {number}{' '}
          </p>
          <button type="button">Delete Contact</button>
        </li>
      ))}
    </ul>
  );
};
