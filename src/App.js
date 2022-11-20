import React, { useState } from "react";
import "./App.css";
import Contacts from "./contacts";
import Logo from "./Logo";

export const ContactContext = React.createContext();

function App() {
  // NOTE: Use context provider in this component
  const [value, setValue] = useState(1);
  const [selects, setSelects] = useState("default");
  const counter = (arr) => setValue(arr.length);

  const store = { value, selects, setSelects };
  return (
    <ContactContext.Provider value={store}>
      <div className='grid-container'>
        <div>
          <Contacts counter={counter} />
        </div>
        <div>
          <Logo />
        </div>
      </div>
    </ContactContext.Provider>
  );
}

export default App;
