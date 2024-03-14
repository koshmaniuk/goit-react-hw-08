import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/selectors";

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const { loading, error } = useSelector((state) => state.contacts);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>Error!</p>}
      <ul className={css.contactListContainer}>
        {filteredContacts.map((contact) => (
          <Contact
            key={contact.id}
            contactId={contact.id}
            name={contact.name}
            phoneNumber={contact.number}
          />
        ))}
      </ul>
    </div>
  );
};

// export default ContactList;
