import React from "react";
import css from ".././Contacts/Contacts.module.css";

const Filter = ({ value, onChange }) => (
  <label className={css.filter}>
    Find contacts by name
    <input
        className={css.filterInput}
        type="text"
        value={value}
        onChange={onChange} />
  </label>
);

export default Filter;
