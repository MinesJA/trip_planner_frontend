import React, {useState} from 'react';
import { Grid } from 'semantic-ui-react';

const unclickedStyle = {
  backgroundColor: 'transparent',
  width: '100%',
  cursor: 'pointer'
}

const clickedStyle = {
  backgroundColor: 'red',
  width: '100%',
  cursor: 'pointer'
}

const columnStyle = {
  padding: '5px'
}


function Day({day}){
  let [clicked, setClicked] = useState(false)

  const handleClick = (e) => {
    console.log("CLicked" + day);
    setClicked(!clicked);
  }

    return (
      <Grid.Column
        key={day}
        style={columnStyle}>
        <div
          onClick={handleClick}
          style={clicked ? clickedStyle : unclickedStyle}>
          {day}
        </div>
      </Grid.Column>
    )
}

export default Day;
