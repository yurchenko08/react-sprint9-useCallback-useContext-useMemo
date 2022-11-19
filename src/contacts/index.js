import React, { useState } from "react";
import stylesCenter from "./index.module.css";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const [id, setId] = useState(1);
  const [contacts, setContacts] = useState([
    <ContactItem id={0} index={0} key={0} />,
  ]);
  const addContacts = () => {
    setId((id) => id + 1);
    setContacts((contacts) => [...contacts, <ContactItem id={id} key={id} />]);
  };
  const removeContact = (id) => {
    setContacts((prev) => prev.filter((el) => el.props.id !== id));
    console.log("deleted item...");
    console.log(contacts);
  };
  // NOTE: 'teach' the button to add new contact info
  // NOTE: and render an array of ContactItem components

  return (
    <>
      <div className={stylesCenter.channels}>
        {contacts.map((el, i) => (
          <ContactItem
            id={el.props.id}
            key={el.props.id}
            index={i}
            removeContact={removeContact}
          />
        ))}
      </div>
      <div>
        <button
          className={stylesCenter.addButton}
          data-testid='add-button'
          onClick={addContacts}
        >
          <img src='plus.svg' alt='plus logo' />
          <span className={stylesCenter.addButtonText}>
            Додати канал зв'язку
          </span>
        </button>
      </div>
    </>
  );
};

export default Contacts;
