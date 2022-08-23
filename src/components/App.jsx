import { Component } from "react";
import Filter from "./phonebook/Filter";
import ContactList from "./phonebook/ContactList";
import ContactForm from "../components/phonebook/ContactForm";
import { nanoid } from "nanoid";
import style from './phonebook/phonebook.module.css'
import Notiflix from "notiflix";
import PropTypes from 'prop-types';


class App extends Component {



  state = {
    contacts: [],
    filter: '',
  }

  onSubmit = (e) => {
    e.preventDefault();
    const target = e.target
    const name = target.name
    const value = name.value
    const numberVal = e.target.number.value
    const { contacts } = this.state 
  const allName= [];

contacts.forEach(contact => {
allName.push(contact.name)
})


if (allName.includes(value)) {
  Notiflix.Notify.failure('The name already exists!')
} else { 
  this.setState({contacts: [...contacts, {id: nanoid(), name: value, number: numberVal}]}, e.target.reset()) 
}
    

  }

       
    
onFilter = (e) => {
    
  const filterValue = e.target.value
  
  this.setState({filter: filterValue})
}


onDelete = (e) => {

  const {contacts} = this.state
  const target = e.target
const newContacts = contacts.filter(contact => contact.id !== target.id)
  this.setState({contacts: newContacts})

}


componentDidMount () {

if (localStorage.getItem('contacts') === null) {
  this.setState({contacts: []})

} else {

this.setState({contacts: JSON.parse(localStorage.getItem('contacts') )})
console.log(JSON.parse(localStorage.getItem('contacts')))
}
}



componentDidUpdate (prevProps, prevState) {

  if (this.state.contacts !== prevState.contacts ) {

    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }

}



render(){
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}


    >
<h1 className={style.title_tag}>Phonebook</h1>
  <ContactForm onSubmit={this.onSubmit}/>

  <h2 className={style.title_tag}>Contacts</h2>
  
  <Filter onFilter={this.onFilter} contacts={this.state.contacts} />
  <ContactList Contacts={this.state.contacts} filterValue={this.state.filter} onDelete={this.onDelete}/>

    </div>
  );

}
};

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string
  
  }

export default App