import Contacts from "./Contacts.jsx";
import React, { Component } from "react";
import css from ".././Contacts/Contacts.module.css";
import Form from "./Form.jsx";
import Filter from "./Filter.jsx";
import shortId from "shortid";
import contacts from "./Contacts.jsx";

class ContactList extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  deleteContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId,
      ),
    }));
  };

  addContact = (data) => {
    console.log(data);
    console.log(this.state.contacts);

    const contact = {
      id: shortId.generate(),
      name: data.name,
      number: data.number,
    };
    const neededContact = this.state.contacts.find(
      (contact) => contact.name === data.name && contact.number === data.number,
    );

    if (neededContact) window.alert(`${data.name} is already in contacts`);
    else
      this.setState((prevState) => ({
        contacts: [contact, ...prevState.contacts],
      }));
  };

  changeFilter = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    return (
      <div className={css.main}>
        <h1 className={css.h1Title}>Pnonebook</h1>
        <Form onSubmit={this.addContact} />
        <h1 className={css.h1Title}>Contacts</h1>
        <Contacts
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
        <Filter value={filter} onChange={this.changeFilter} />
      </div>
    );
  }
}

export default ContactList;
