import { useSelector, useDispatch } from 'react-redux';
import css from '../ContactsList/ContactsList.module.css';
import { getFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';

export function ContactsList() {
  const filteredContact = useSelector(getFilteredContacts);
  
  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {filteredContact.map(contact => {
        return (
          <li className={css.items} key={contact.id}>
            <span className={css.span}>{contact.name}</span>:
            <span className={css.span}>{contact.number}</span>
            <button
              className={css.itemBtn}
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};
