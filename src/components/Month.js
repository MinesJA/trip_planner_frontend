import React, { useState, useEffect } from 'react';
import WeekDays from './WeekDays';
import NumberedDays from './NumberedDays';
import { Container, Header, Grid } from 'semantic-ui-react';

const containerStyle = {
  margin: '20px',
  width: '250px',
  height: '300px',
  border: '5px solid blue'
};

const headerStyle = {
  margin: '10px'
};

function Month({name}) {
  const [weekDays, setWeekDays] = useState([]);

  // () => {
  // async function fetchData() {
  //   // You can await here
  //   const response = await MyAPI.getData(someId);
  //   // ...
  // }

  // useEffect(() => {
  //   async function fetchData(){
  //     fetch(WEEKDAYS_URL)
  //       .then(res => res.json())
  //       .then(setWeekDays)
  //     }
  //     fetchData()
  //   },[weekDays]
  // )

  // useEffect(() => {
  //   fetch(WEEKDAYS_URL)
  //       .then(res => res.json())
  //       .then(setWeekDays)
  //   },[weekDays]
  // )

  let days = Array.from(Array(7).keys())
  let weeks = Array.from(Array(5).keys())

  return (
    <Container style={containerStyle}>
      <Header style={headerStyle}>{name}</Header>
      <Grid columns={7}>
        <WeekDays />
        <NumberedDays weeks={weeks} days={days}/>
      </Grid>
    </Container>
  );
}

export default Month;
