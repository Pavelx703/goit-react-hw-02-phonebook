import React, { Component } from "react";
import Section from "./Sections/Sections";
import ContactList from "./ContactList/ContactList";
import ContactForm from "./ContactForm/ContactForm";
import Filter from "./Filter/Filter";
import { uuid } from "uuidv4";

export default class App extends Component {
  state = {
    contacts: [
      { id: uuid(), name: "Rosie Simpson", number: "459-12-56" },
      { id: uuid(), name: "Hermione Kline", number: "443-89-12" },
      { id: uuid(), name: "Eden Clements", number: "645-17-79" },
      { id: uuid(), name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };
  addContact = (name, number) => {
    const contact = {
      id: uuid(),
      name,
      number,
    };

    const nameIsOriginal = this.state.contacts
      .map((contact) => contact.name)
      .includes(name);

    this.setState((prevState) => {
      if (nameIsOriginal) {
        alert(`Имя ${name} уже существует!`);
      } else {
        return {
          contacts: [...prevState.contacts, contact],
        };
      }
    });
  };

  removeContact = (contactId) => {
    this.setState((prevState) => {
      return {
        contacts: prevState.contacts.filter(({ id }) => id !== contactId),
      };
    });
  };

  changeFilter = (filter) => {
    this.setState({ filter });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  render() {
    const { filter } = this.state;

    const visibleContacts = this.getVisibleContacts();

    return (
      <Section title="Phonebook">
        <ContactForm onAddContact={this.addContact} />

        <h2>Contacts</h2>
        <Filter value={filter} onChangeFilter={this.changeFilter} />
        {visibleContacts.length > 0 && (
          <ContactList
            contacts={visibleContacts}
            onRemoveContact={this.removeContact}
          />
        )}
      </Section>
    );
  }
}
