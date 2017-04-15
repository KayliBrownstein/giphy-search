import React from 'react';

const DisplayTile = (props) => {
  return(
    <div className="large-3 columns panel">
      <img src={props.url} />
    </div>
  )
}

export default DisplayTile;
