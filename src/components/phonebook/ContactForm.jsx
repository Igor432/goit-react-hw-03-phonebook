import style from '../phonebook/phonebook.module.css'
import PropTypes from 'prop-types';


const ContactForm = ({onSubmit}) => {




    return (
<div class="main_div">
<form onSubmit={onSubmit} className={style.forma}>
    <p class="input_tag">Name</p>
    <input
    type="text"
    name="name"
    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    required
    className={style.name_input}
  />
  <p class="input_tag">Number</p>
  <input
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
  className={style.number_input}
/>

  <button type="submit"  className={style.submit_button}>Add Contact</button>
</form>


</div>
    )
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};




export default ContactForm