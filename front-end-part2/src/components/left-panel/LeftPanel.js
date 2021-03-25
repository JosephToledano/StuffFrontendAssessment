import UserCircle from "./UserCircle";
import { useState } from "react";

const LeftPanel = ({
  tickets,
  setProceed,
  selectedTicket,
  setSelectedTicket,
  messages,
  setSelectedFullTicket,
  setSelectOption,
}) => {
  const [selected, setSelected] = useState(-1);

  //handler for clicking on tickets on left-hand panel
  const handleFocus = (e) => {
    console.log(e.target.id);
    for (let i = 0; i < tickets.length; i++) {
      if (parseInt(e.target.id) === i) {
        setSelectedTicket(tickets[i].Goal);
        setSelectedFullTicket(tickets[i]);
        setProceed(false);
      }
    }
    setSelectOption("");
  };

  return (
    <div className='left-panel'>
      <div id='taskCircleImage' />
      <div id='tasks-container'>
        {tickets
          ? tickets.map((ticket, idx) => (
              <UserCircle
                selectedTicket={selectedTicket}
                ticket={ticket}
                key={idx}
                index={idx}
                messages={messages}
                tickets={tickets}
                handleFocus={handleFocus}
                selected={selected}
                setSelected={setSelected}
              />
            ))
          : null}
      </div>
    </div>
  );
};

export default LeftPanel;
