import React, { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import Section from "./Section/Section";

class App extends Component {
  state = {
    contacts: [],
    filter: "",
  };
  componentDidMount() {
    const todos = localStorage.getItem("contacts");
    const parse = JSON.parse(todos);
    if (parse) {
      this.setState({ contacts: parse });
    }
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  removeContact = (id) => {
    const { contacts } = this.state;
    const updated = contacts.filter((contact) => contact.id !== id);
    this.setState({
      contacts: [...updated],
    });
  };

  addContact = (contact) => {
    const newName = contact.name;
    const names = this.state.contacts.map((contact) =>
      contact.name.toLowerCase()
    );
    if (names.includes(newName.toLowerCase())) {
      alert(`${newName} is already in contact list`);
    } else {
      this.setState((state) => ({
        contacts: [...state.contacts, contact],
      }));
    }
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    if (contacts.length) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      );
    }
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <Section title="Phonebook">
          <ContactForm addContact={this.addContact} />
        </Section>
        <Section title="Contacts">
          {contacts.length > 1 && <Filter onChange={this.handleChange} />}
          {contacts.length ? (
            <ContactList
              contacts={this.getVisibleContacts()}
              onRemove={this.removeContact}
            />
          ) : (
            <p>There are no contacts here</p>
          )}
        </Section>
      </>
    );
  }
}
export default App;
