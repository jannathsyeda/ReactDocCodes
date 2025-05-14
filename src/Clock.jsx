import React from 'react'
const styles = {
  night: {
    backgroundColor: 'black',
    color: 'white',
    padding: '10px',
    borderRadius: '5px'
  },
  day: {
    backgroundColor: 'white',
    color: 'black',
    padding: '10px',
    borderRadius: '5px'
  }
}

export default function Clock({time}) {
  let hours = time.getHours();
  let className;
  let style;
  if (hours >= 0 && hours <= 6) {
    className = 'night';
    style=styles.night;
  } else {
    className = 'day';
    style=styles.day;

  }

return(<>
  <h1 className={className} style={style}>
      {time.toLocaleTimeString()}
    </h1></>
)
   
  }
