import React from 'react'
import { IconButton } from "@mui/material";
import stylescenter from "./ContactItem.module.css";

const options = [
  { value: "none", label: "" },
  { value: "viber", label: "Viber" },
  { value: "telegram", label: "Telegram" },
  { value: "messenger", label: "Messenger" },
  { value: "sms", label: "SMS" },
];

const ContactItem = ({index}) => {

  // NOTE: This component should take additional props 
  // NOTE: and use them to manage state

  console.log("child render", index)
  return (
    <div className={stylescenter.fullChannelControll}>
      <div className={stylescenter.channelAndChannel} >
        <p className={stylescenter.channelOfConntection}>
          Канал зв'язку
        </p>
        <select
          className={stylescenter.selecterOptions}
          name="optionSelected"          
        >
          {options.map((el) => (
            <option key={el.value} value={el.value}>
              {el.label}
            </option>
          ))}
        </select>
      </div>
      <div className={stylescenter.detailsAndInputAndDelete}>
        <p className={stylescenter.channelOfConntection}>
          Деталі
        </p>
        <textarea
          data-testid="details"
          maxLength="100"
          rows="2"          
          className={stylescenter.detailsChannelInput}          
          placeholder="введіть телефон або @username"
        />
        <div className={stylescenter.removeButtons}>
          {index !== 0 && (
            <span>
              <IconButton>
                <img src="bin.svg" alt="bin logo" />
                <span className={stylescenter.removeButtonText}>
                  Видалити канал
                </span>
              </IconButton>
            </span>
          )}
        </div>
      </div>
    </div>
  )
}

export default ContactItem