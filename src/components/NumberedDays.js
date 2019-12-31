import React from 'react';
import Day from './Day';
import { Grid } from 'semantic-ui-react';


function WeekDays({weeks, days}){

  const rowStyle = {
      padding: '5px'
  }

    return (
      <>
      {weeks.map(i =>
          <Grid.Row style={rowStyle}>{days.map(i => <Day day={i}/>)}</Grid.Row>
      )}
      </>
    )
}

export default WeekDays;
