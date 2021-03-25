import "./App.css";
import ClassifyPanel from "./components/classify-panel/ClassifyPanel";
import LeftPanel from "./components/left-panel/LeftPanel";
import WhitePanel from "./components/white-panel/WhitePanel";
import { useState } from "react";

let mockState = [
  {
    _id: "5cdb6454107a752e479349f9",
    Title: "",
    Assignee: "Ace Ventura",
    Status: "New",
    Goal: "Buy a product",
    Messages: [{ time: "test", message: "test" }],
    Snoozed: false,
    NewMessage: false,
  },
  {
    _id: "6cdb6454107a752e479349f9",
    Title: "",
    Assignee: "John Wick",
    Status: "New",
    Goal: "Cancel an account",
    Messages: [],
    Snoozed: false,
    NewMessage: false,
  },
  {
    _id: "7cdb6454107a752e479349f9",
    Title: "",
    Assignee: "The Bride",
    Status: "New",
    Goal: "Buy and Recommend a gift",
    Messages: [],
    Snoozed: false,
    NewMessage: false,
  },
  {
    _id: "8cdb6454107a752e479349f9",
    Title: "",
    Assignee: "Don Corligione",
    Status: "New",
    Goal: "Ask for the business",
    Messages: [],
    Snoozed: false,
    NewMessage: false,
  },
];

function App() {
  const [tickets, setTickets] = useState(mockState);
  const [messages, setMessages] = useState([{}]);
  const [selectedTicket, setSelectedTicket] = useState(
    "Select a ticket to get started"
  );
  const [proceed, setProceed] = useState(false);
  const [selectOption, setSelectOption] = useState("");

  const [selectedFullTicket, setSelectedFullTicket] = useState({});

  return (
    <>
      <div className='container'>
        <LeftPanel
          tickets={tickets}
          messages={messages}
          selectedTicket={selectedTicket}
          setSelectedTicket={setSelectedTicket}
          selectedFullTicket={selectedFullTicket}
          setSelectedFullTicket={setSelectedFullTicket}
          setProceed={setProceed}
          selectOption={selectOption}
          setSelectOption={setSelectOption}
        />
        <ClassifyPanel
          tickets={tickets}
          setTickets={setTickets}
          selectedTicket={selectedTicket}
          setSelectedTicket={setSelectedTicket}
          proceed={proceed}
          setProceed={setProceed}
          selectedFullTicket={selectedFullTicket}
          setSelectedFullTicket={setSelectedFullTicket}
          selectOption={selectOption}
          setSelectOption={setSelectOption}
        />
        <WhitePanel
          tickets={tickets}
          setTickets={setTickets}
          setMessages={setMessages}
          messages={messages}
          selectedTicket={selectedTicket}
          setSelectedTicket={setSelectedTicket}
          proceed={proceed}
          setProceed={setProceed}
          selectedFullTicket={selectedFullTicket}
          setSelectedFullTicket={setSelectedFullTicket}
        />
      </div>
    </>
  );
}

export default App;
