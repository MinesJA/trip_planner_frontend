import React from 'react';
import { Header, Grid } from 'semantic-ui-react';

function WeekDays({weekDays}){
    return (
      <Grid.Row>
        {weekDays.map(weekDay => <Grid.Column><Header>{weekDay}</Header></Grid.Column>)}
      </Grid.Row>
    )
}

export default WeekDays;
