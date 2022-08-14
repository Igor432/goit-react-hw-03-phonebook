
import ContactElement from "./ContactElements";
import style from '../phonebook/phonebook.module.css'
import PropTypes from 'prop-types';


const ContactList = ({Contacts, filterValue, onDelete}) => {

 const filteredContact = Contacts.filter((contact) => contact.name.toLowerCase().includes(filterValue.toLowerCase()))


        
return (
  <div className={style.contacts}>

<ul className={style.contacts_list} >
    
    { filteredContact.map(filcontact => (
        <ContactElement key={filcontact.id} contact={filcontact} onDelete={onDelete}/>
 
     ))}
 
     </ul>
     </div> 
                 )
            
             
}



ContactList.propTypes = {
  Contacts: PropTypes.array,
  filterValue: PropTypes.string,
  onDelete: PropTypes.func
  
  }
  

export default ContactList;