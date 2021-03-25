import { useState } from "react";
import DatePicker from "./DatePicker";

const DateOfBirth = ({
  focused,
  setFocus,
  date,
  month,
  year,
  setDate,
  setMonth,
  setYear,
  monthIdx,
  setMonthIdx,
}) => {
  let displayDate = `${month[monthIdx]} ${date}, ${year}`;
  return (
    <>
      <div className='date-container'>
        <div className='textInputContainer'>
          <p id='dateText'>Date of birth</p>
          <input
            value={displayDate}
            id='dateInput'
            onFocus={(e) => {
              setFocus(true);
            }}
          />
        </div>
        {focused ? (
          <DatePicker
            month={month}
            setMonth={setMonth}
            date={date}
            setDate={setDate}
            setFocus={setFocus}
            year={year}
            setYear={setYear}
            monthIdx={monthIdx}
            setMonthIdx={setMonthIdx}
          />
        ) : null}
      </div>
    </>
  );
};

export default DateOfBirth;
