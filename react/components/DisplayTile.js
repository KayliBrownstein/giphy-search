import React from 'react';

const DisplayTile = (props) => {
  return(
    <div className="small-12 medium-6 large-4 columns">
      <img src={props.url} />
    </div>
  )
}

export default DisplayTile;
