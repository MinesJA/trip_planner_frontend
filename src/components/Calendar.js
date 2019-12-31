import React, { useEffect, useState } from 'react';
import Month from './Month.js';
import { Grid } from 'semantic-ui-react';
import { formatHolidays } from '../utils';

const MONTHS = [
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
    "December"
]

const HOLIDAYS_URL = " http://localhost:3000/holidays"

const gridStyle = {
  margin: '40px',
  border: '5px solid pink'
};

function Calendar() {
  const [holidays, setHolidays] = useState({})

  useEffect(() => {
    const fetchHolidays = () =>
      fetch(HOLIDAYS_URL)
        .then(res => res.json())
        .then(res => setHolidays(formatHolidays(res)))

    fetchHolidays()
  }, [])

  console.log(holidays)

  return (
    <Grid columns={4} centered divided style={gridStyle}>
      {MONTHS.map(month => <Month key={month} name={month} />)}
    </Grid>
  );
}

export default Calendar;
