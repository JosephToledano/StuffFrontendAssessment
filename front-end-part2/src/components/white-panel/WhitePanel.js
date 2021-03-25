import Message from "./Message.js";
import InputBar from "./InputBar";
import { useEffect } from "react";

const WhitePanel = ({
  selectedFullTicket,
  tickets,
  selectedTicket,
  setTickets,
  proceed,
  setProceed,
}) => {
  useEffect(
    (selectedTicket) => {
      tickets.forEach((ticket) => {
        if (ticket.Goal === selectedTicket && ticket.Proceed) {
          setProceed(true);
        }
      });
    }
    // [selectedTicket]
  );

  //handler for snoozing tickets
  const handleSnooze = (e) => {
    let newTickets = tickets;
    newTickets.filter((ticket) => {
      if (ticket.Goal === selectedTicket) {
        ticket.Snoozed = true;
        ticket.NewMessage = false;
      }
      return;
    });
    // selectedFullTicket.Snoozed = true;
    setTickets((newTickets) => [...newTickets], tickets);
  };

  return (
    <>
      <div className='white-panel'>
        <div className='white-panel-top-section'>
          <h4>{selectedTicket}</h4>
          <div className='white-panel-top-right-section'>
            <h4>00:00</h4>
            <img
              className='white-panel-top-section-pic'
              alt='timer'
              src='https://cdn4.iconfinder.com/data/icons/evil-icons-user-interface/64/clock-256.png'
            />
            <img
              className='white-panel-top-section-pic'
              alt='timer'
              src='https://cdn1.iconfinder.com/data/icons/office-and-business-2-2/85/drawer_documents_files_archive-256.png'
            />
          </div>
        </div>
        {selectedFullTicket && selectedFullTicket.Messages ? (
          <>
            <button
              id='white-panel-snooze-button'
              onClick={() => handleSnooze()}
            >
              {" "}
              Snooze{" "}
            </button>
            {selectedFullTicket.Messages.map((message) => {
              return <Message message={message} />;
            })}
          </>
        ) : null}
        {
          proceed ? (
            <InputBar
              proceed={proceed}
              setTickets={setTickets}
              tickets={tickets}
              selectedTicket={selectedTicket}
            />
          ) : (
            // <div className='prohibted-input-container'>
            <div id='coversation-box-prohibited'>
              <img
                className='white-panel-bottom-section-pic'
                alt='stop'
                src='https://cdn4.iconfinder.com/data/icons/epic-outlines/30/forbidden-256.png'
              />
              <input
                type='text'
                id='conversation-box-text-stop'
                placeholder='Type a message'
                value=''
              />
            </div>
          )
          // onChange={(e) => handleChange(e)}   />
        }
      </div>
    </>
  );
};

export default WhitePanel;
