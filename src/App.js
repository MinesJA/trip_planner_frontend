import React from 'react';
import Month from './components/Month.js';
import { Grid } from 'semantic-ui-react';


const gridStyle = {
  margin: '40px',
  border: '5px solid pink'
};

function App() {

  let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  return (
    <Grid columns={4} centered divided style={gridStyle}>
      {months.map(month => <Month key={month} name={month} />)}
    </Grid>
  );
}

export default App;
