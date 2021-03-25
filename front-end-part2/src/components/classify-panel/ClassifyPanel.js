import { useState } from "react";

const ClassifyPanel = ({
  tickets,
  setTickets,
  setSelectedTicket,
  setSelectedFullTicket,
  selectOption,
  setSelectOption,
  setProceed,
}) => {
  const [characterCount, setCharacterCount] = useState(0);
  const [ticketName, setTicketName] = useState("");

  //variable to keep track of character count vs. the limit
  let characters = 25 - characterCount;

  //Handling Classification Naming Textbox Changes
  const handleChange = (e) => {
    let currentCount = e.target.value.length;
    setCharacterCount(currentCount);
    setTicketName(e.target.value);
  };

  //Handling Classification dropdown
  const handleSelectChange = (e) => {
    console.log(e.target.value);
    for (let i = 0; i < tickets.length; i++) {
      if (e.target.value === tickets[i].Goal) {
        setSelectedFullTicket(tickets[i]);
        setSelectedTicket(e.target.value);
      }
    }
    setProceed(false);
    setSelectOption(e.target.value);
  };

  //Submitting classification details
  const handleSubmit = () => {
    console.log(selectOption, characters);
    if (characters <= 24 && characters > 0 && selectOption !== "Select") {
      tickets.forEach((ticket) => {
        if (ticket.Goal === selectOption) {
          ticket.Title = ticketName;
          ticket.Proceed = true;
          setProceed(true);
        }
        return ticket;
      });

      setTickets(tickets);
    }
  };

  return (
    <div className='classify-panel'>
      <p className='classify-header'>Classify</p>
      <div>
        <form className='classify-panel-form'>
          <label className='label-text'>
            What's the user asking for?
            <select
              id='classify-panel-select'
              name='user-choices'
              values={selectOption}
              onChange={(e) => handleSelectChange(e)}
            >
              <option className='select-options'>Select</option>
              {tickets
                ? tickets.map((ticket, idx) => (
                    <option
                      key={`ticket_title: ${ticket.Goal} ${idx}`}
                      value={ticket.Goal}
                      id={idx}
                    >
                      {ticket.Goal}
                    </option>
                  ))
                : null}
            </select>
          </label>
          <label className='label-text'>
            What's the name of this ticket?
            <input
              className='classify-panel-text-input'
              type='text'
              placeholder='Buy what?'
              val=''
              onChange={(e) => handleChange(e)}
            />
          </label>
          {characters < 0 ? (
            <p id='character-count-negative'>Characters left: {characters}</p>
          ) : (
            <p>Characters left: {characters}</p>
          )}
        </form>
      </div>
      <button id='classify-panel-submit' value='Proceed' onClick={handleSubmit}>
        Proceed
      </button>
    </div>
  );
};

export default ClassifyPanel;
