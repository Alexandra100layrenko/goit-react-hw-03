import { FaUserLarge, FaPhone } from "react-icons/fa6";
import s from './Contact.module.css'


const Contact = ({ name, number, deleteContact }) => {
  return (
    <li className={s.container}>
        <div className={s.contact}>
          <p><FaUserLarge className={s.icon} />{name}</p>
          <p><FaPhone className={s.icon} />{number}</p>
        </div>
        <button onClick={deleteContact}>Delete</button>
    </li>
  )
}

export default Contact;
