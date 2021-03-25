const Message = ({ message }) => {
  return (
    <>
      <p
        id='white-panel-task-input'
        placeholder="I'd like to do something (first msg in a task)"
      >
        {message.message}
      </p>
      <p id='white-panel-task-input-detail'>
        {" "}
        <span class='dot'></span>
        Joe Toledano {message.time}
      </p>
    </>
  );
};

export default Message;
