import React from "react";
import './App.css';
import Contacts from './contacts';
import Logo from "./Logo";

export const ContactContext = React.createContext();


function App() {

// NOTE: Use context provider in this component 

  return (
    <div className="grid-container">
      <div>
        <Contacts/>
      </div>
      <div>       
        <Logo />       
      </div>
    </div>
  );
}

export default App;
