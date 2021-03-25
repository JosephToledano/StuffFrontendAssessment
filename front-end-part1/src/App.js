import "./App.scss";
import DateOfBirth from "./components/DateOfBirth";
import DatePicker from "./components/DatePicker";
import { useState } from "react";

function App() {
  const [focused, setFocus] = useState(false);
  const [month, setMonth] = useState([
    "Jan",
    "Feb",
    "March",
    "April",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]);
  const [monthIdx, setMonthIdx] = useState(0);
  const [date, setDate] = useState("01");
  const [year, setYear] = useState(2020);

  return (
    <div className='App'>
      <DateOfBirth
        focused={focused}
        setFocus={setFocus}
        month={month}
        setMonth={setMonth}
        date={date}
        setDate={setDate}
        year={year}
        setYear={setYear}
        monthIdx={monthIdx}
        setMonthIdx={setMonthIdx}
      />
    </div>
  );
}

export default App;
