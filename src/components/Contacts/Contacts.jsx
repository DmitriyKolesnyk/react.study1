import React from 'react';
import css from ".././Contacts/Contacts.module.css";

const Contacts = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name }) => (
      <li key={id} className={css.ContactListItem}>
        <p className={css.ContactListName}>{name}</p>
        <button onClick={() => onDeleteContact(id)}>Удалить</button>
      </li>
    ))}
  </ul>
);

export default Contacts;
