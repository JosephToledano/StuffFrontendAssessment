import { fireEvent } from "@testing-library/react";
import { useState } from "react";

const InputBar = ({ setTickets, selectedTicket, tickets }) => {
  const [message, setMessage] = useState("");

  //Handler for typed in message
  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  //Handler for clicking on input field
  const handleClick = (e) => {
    let inputBox = e.target;
    let submitButton = document.querySelector("#white-panel-submit-button");
    console.log(inputBox);
    inputBox.style.padding = "5%";
    submitButton.style.padding = "2% 4% 2% 4%";
  };

  //Handler for submitting a message
  const handleSubmit = () => {
    console.log(message, selectedTicket);
    tickets.forEach((ticket) => {
      console.log(ticket);
      if (ticket.Goal === selectedTicket) {
        let currentTime = new Date().toLocaleTimeString();
        ticket.Messages.push({
          time: currentTime,
          message: message,
        });
        ticket.NewMessage = true;
        ticket.Snoozed = false;
        setTickets((ticket) => [...ticket], tickets);
      }
      let formField = document.querySelector("#conversation-box-text-proceed");
      formField.value = "";
      setMessage(null);
    });
  };

  return (
    <div id='white-panel-input-section'>
      <input
        type='text'
        onClick={(e) => handleClick(e)}
        id='conversation-box-text-proceed'
        placeholder='Type a message'
        onChange={(e) => handleChange(e)}
        value={message}
      />
      <button id='white-panel-submit-button' onClick={() => handleSubmit()}>
        {" "}
        Send{" "}
      </button>
    </div>
  );
};

export default InputBar;
