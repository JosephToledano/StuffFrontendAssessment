import React from "react";

const DatePicker = ({
  date,
  month,
  year,
  setDate,
  setMonth,
  setFocus,
  setYear,
  monthIdx,
  setMonthIdx,
}) => {
  //Updating the date value
  const dateHandler = (e) => {
    //checking if the value should increase or decrease
    if (e.target.id === "up") {
      //check which month it is to know the upper limit of days
      if (parseInt(date) < 31) {
        let currentDate = parseInt(date);
        currentDate += 1;
        currentDate >= 10
          ? setDate(String(currentDate))
          : setDate(`0${currentDate}`);
      }
    } else {
      if (parseInt(date) > 1) {
        let currentDate = parseInt(date);
        currentDate -= 1;
        currentDate >= 10
          ? setDate(String(currentDate))
          : setDate(`0${currentDate}`);
      }
    }
  };

  //updating the month
  const monthHandler = (e) => {
    if (e.target.id === "up") {
      //check which month it is to know the upper limit of days
      if (monthIdx < 11) {
        setMonthIdx(monthIdx + 1);
      }
    } else {
      if (monthIdx > 0) {
        setMonthIdx(monthIdx - 1);
      }
    }
  };

  //updating the year
  const yearHandler = (e) => {
    if (e.target.id === "up") {
      setYear(year + 1);
    } else {
      if (year > 0) {
        setYear(year - 1);
      }
    }
  };

  return (
    <>
      <div
        className='picker-container'
        tabIndex={-1}
        onBlur={() => setFocus(false)}
      >
        <div className='picker-inner'>
          <div className='date'>
            <p id='up' onClick={(e) => dateHandler(e)}>
              ^
            </p>
            <p>{date}</p>
            <p id='down' onClick={dateHandler}>
              ^
            </p>
          </div>
          <div className='month'>
            <p id='up' onClick={(e) => monthHandler(e)}>
              {" "}
              ^{" "}
            </p>
            <p>{month[monthIdx]}</p>
            <p id='down' onClick={monthHandler}>
              ^
            </p>
          </div>
          <div className='year'>
            <p id='up' onClick={(e) => yearHandler(e)}>
              ^
            </p>
            <p>{year}</p>
            <p id='down' onClick={yearHandler}>
              ^{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default DatePicker;
