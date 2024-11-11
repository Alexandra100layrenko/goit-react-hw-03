import s from './ContactList.module.css'
import Contact from '../Contact/Contact'


const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
      <Contact 
        key={id} 
        name={name} 
        number={number} 
        deleteContact={() => deleteContact(id)} />
    ))}
    </ul>
  )
}

export default ContactList;
