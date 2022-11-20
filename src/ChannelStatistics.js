import React, { useContext } from "react";
import { ContactContext } from "./App";
function ChannelStatistics() {
  // NOTE: use Context to get info about entered contacts
  const value = useContext(ContactContext);
  return (
    <p data-testid='statistics'>
      Count of channels: {value.value} <br />
      {value.selects !== "default" &&
        value.selects !== "none" &&
        `your last channel is ${value.selects}`}
    </p>
  );
}

export default ChannelStatistics;
