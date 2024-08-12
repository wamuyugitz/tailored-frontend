import React, { useState } from "react";
import "./Calendar.css";

const Calendar = () => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());
  const [selectedDate, setSelectedDate] = useState(today.getDate());

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const years = [];
  for (let i = currentYear - 5; i <= currentYear + 5; i++) {
    years.push(i);
  }

  const daysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const firstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay();
  };

  const renderDays = () => {
    const days = [];
    const daysInCurrentMonth = daysInMonth(currentYear, currentMonth);
    const firstDay = firstDayOfMonth(currentYear, currentMonth);

    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="calendar-day empty"></div>);
    }

    for (let day = 1; day <= daysInCurrentMonth; day++) {
      const isToday =
        day === today.getDate() &&
        currentMonth === today.getMonth() &&
        currentYear === today.getFullYear();
      const isSelected = day === selectedDate;
      days.push(
        <div
          key={day}
          className={`calendar-day${isSelected ? " selected" : ""}${
            isToday ? " today" : ""
          }`}
          onClick={() => setSelectedDate(day)}
        >
          {day}
        </div>
      );
    }

    return days;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(currentMonth === 0 ? 11 : currentMonth - 1);
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
    }
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    setCurrentMonth(currentMonth === 11 ? 0 : currentMonth + 1);
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
    }
    setSelectedDate(null);
  };

  const handleMonthChange = (e) => {
    setCurrentMonth(parseInt(e.target.value, 10));
    setSelectedDate(null);
  };

  const handleYearChange = (e) => {
    setCurrentYear(parseInt(e.target.value, 10));
    setSelectedDate(null);
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={handlePrevMonth}>&lt;</button>
        <select value={currentMonth} onChange={handleMonthChange}>
          {months.map((month, index) => (
            <option key={index} value={index}>
              {month}
            </option>
          ))}
        </select>
        <select value={currentYear} onChange={handleYearChange}>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="calendar-body">
        <div className="calendar-grid">{renderDays()}</div>
      </div>
    </div>
  );
};

export default Calendar;
