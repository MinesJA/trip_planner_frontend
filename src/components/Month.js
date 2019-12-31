import React from 'react';
import WeekDays from './WeekDays';
import NumberedDays from './NumberedDays';
import { List, Container, Header, Grid } from 'semantic-ui-react';

const containerStyle = {
  margin: '20px',
  width: '250px',
  height: '300px',
  border: '5px solid blue'
};

const headerStyle = {
  margin: '10px'
}

const listStyle = {
  width: '100%'
}

const listItemStyle = {
  textAlign: 'justify'
}


function Month({name}) {

  let weekDays = [
    'S',
    'M',
    'T',
    'W',
    'T',
    'F',
    'S'
  ]

  let days = Array.from(Array(7).keys())
  let weeks = Array.from(Array(5).keys())

  return (
    <Container style={containerStyle}>
      <Header style={headerStyle}>{name}</Header>
      <Grid columns={7}>
        <WeekDays weekDays={weekDays}/>
        <NumberedDays weeks={weeks} days={days}/>
      </Grid>
    </Container>
  );
}

export default Month;
