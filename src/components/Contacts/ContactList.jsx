import Contacts from "./Contacts.jsx";
import React, {Component} from "react";

class ContactList extends Component {
  state = {
      contacts: [{id: 'id-1', name: 'Rosie Simpson'},
                 {id: 'id-2', name: 'Hermione Kline'},
                 {id: 'id-3', name: 'Eden Clements'}
      ]
  };
  deleteContact = (contactId) => {
      this.setState(prevState => ({
          contacts: prevState.contacts.filter(contact => contact.id !== contactId),
      }))
  }
  render() {
      const {contacts} = this.state;
     return (
         <>
          <h1>Contacts</h1>
          <Contacts contacts={contacts} onDeleteContact={this.deleteContact}/>
         </>
  )
  }
}

export default ContactList