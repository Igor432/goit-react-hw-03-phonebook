import { Component } from 'react';
import Filter from './phonebook/Filter';
import ContactList from './phonebook/ContactList';
import ContactForm from '../components/phonebook/ContactForm';
import { nanoid } from 'nanoid';
import style from './phonebook/phonebook.module.css';
import Notiflix from 'notiflix';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  onSubmit = e => {
    e.preventDefault();
    const target = e.target;
    const name = target.name;
    const value = name.value;
    const numberVal = e.target.number.value;

    const result = this.state.contacts.find(element => element.name === value);
    if (result) {
      return Notiflix.Notify.failure('The name already exists!');
    }

    this.setState(prev => ({
      ...prev,
      contacts: [
        ...prev.contacts,
        { id: nanoid(), name: value, number: numberVal },
      ],
    }));
    e.target.reset();
  };

  onFilter = e => {
    const filterValue = e.target.value;

    this.setState({ filter: filterValue });
    console.log(this.state.filter);
  };

  onDelete = e => {
    const target = e.target;
    this.setState(prev => ({
      ...prev,
      contacts: prev.contacts.filter(contact => contact.id !== target.id),
    }));
  };

  componentDidMount() {
    if (localStorage.getItem('contacts')) {
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
    }

    
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    return (
      <div className={style.main}>
        <h1 className={style.title_tag}>Phonebook</h1>
        <ContactForm onSubmit={this.onSubmit} />

        <h2 className={style.title_tag}>Contacts</h2>

        <Filter onFilter={this.onFilter} />
        <ContactList
          contacts={this.state.contacts}
          filterValue={this.state.filter}
          onDelete={this.onDelete}
        />
      </div>
    );
  }
}

export default App;
