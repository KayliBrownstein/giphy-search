import React, { Component } from 'react';
import DisplayTile from './DisplayTile';

const DisplayContainer = (props) => {
  let attributes = props.attributes.map(attribute => {
    return(
      <DisplayTile
        key={attribute.id}
        id={attribute.id}
        url={attribute.images.original.url}
      />
    )
  })

  return(
    <div className='searchResults'>
      <h1 className="heading">Search Results</h1>
      <div id='colorStrip' />
      <div className="row">
        {attributes}
      </div>
    </div>
  )
}

export default DisplayContainer;
