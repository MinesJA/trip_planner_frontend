import React from 'react';
import { Header, Grid } from 'semantic-ui-react';

const WEEKDAYS = [
  "S",
  "M",
  "T",
  "W",
  "T",
  "F",
  "S"
]

function WeekDays(){
    return (
      <Grid.Row>
        {WEEKDAYS.map(weekDay => <Grid.Column><Header>{weekDay}</Header></Grid.Column>)}
      </Grid.Row>
    )
}

export default WeekDays;
