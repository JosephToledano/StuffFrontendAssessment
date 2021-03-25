const UserCircle = ({ ticket, index, selectedTicket, handleFocus }) => {
  //use cases for different left-hand options

  if (selectedTicket === ticket.Goal) {
    return (
      <div
        id={index}
        className='taskCircleSelected'
        onClick={handleFocus}
        // onBlur={(e) => handleBlur(e)}
        value={ticket.Goal}
      >
        <p className='taskCircle-textSelected'>{index} </p>
      </div>
    );
  } else if (ticket.Snoozed) {
    return (
      <div
        id={index}
        className='taskCircle'
        onClick={handleFocus}
        // onBlur={(e) => handleBlur(e)}
        value={ticket.Goal}
      >
        <p className='taskCircle-text'>{index} </p>
        <div id='snoozedDot' />
      </div>
    );
  } else if (ticket.NewMessage) {
    return (
      <div
        id={index}
        className='taskCircle'
        onClick={handleFocus}
        // onBlur={(e) => handleBlur(e)}
        value={ticket.Goal}
      >
        <p className='taskCircle-text'>{index} </p>
        <div className='newDot' />
      </div>
    );
  } else {
    return (
      <div
        className='taskCircle'
        onClick={(e) => handleFocus(e)}
        id={index}
        value={ticket.Goal}
      >
        <p className='taskCircle-text-regular'>{index} </p>
      </div>
    );
  }
};

export default UserCircle;
