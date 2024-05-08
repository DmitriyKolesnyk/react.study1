import React from "react";
import css from ".././Contacts/Contacts.module.css";

const Contacts = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <li
          key={id}
          className={css.ContactListItem}>
        <p

            className={css.ContactListName}>
          {name} : {number}
        </p>
        <button
        className={css.deleteButton}
            onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    ))}
  </ul>
);

export default Contacts;
