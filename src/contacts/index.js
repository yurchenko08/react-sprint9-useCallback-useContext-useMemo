import React from "react";
import stylesCenter from "./index.module.css";
import ContactItem from "./ContactItem";


const Contacts = () => {

  // NOTE: 'teach' the button to add new contact info
  // NOTE: and render an array of ContactItem components

  return (
    <>
      <div className={stylesCenter.channels}>        
          <ContactItem                     
            index={0}            
          />       
      </div>
      <div>
        <button
          className={stylesCenter.addButton}
          data-testid="add-button"          
        >
          <img src="plus.svg" alt="plus logo" />
          <span className={stylesCenter.addButtonText}>
            Додати канал зв'язку
          </span>
        </button>
      </div>
    </>
  );
};

export default Contacts;