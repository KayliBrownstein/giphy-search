import React, { Component } from 'react';

const SearchBar = (props) => {
    return(
      <div>
        <form onSubmit={props.onSubmit}>
        <div className="small-12 medium-6 large-4 columns">
          <input className="input"
            type='text'
            placeholder='Search Term'
            onChange={props.onChange}
            value={props.term} />
          </div>
          <div className="small-12 medium-6 large-4 columns">
            <input className="button"
              type='submit'
              value='Submit' />
          </div>
        </form>
      </div>
  )
}

export default SearchBar;
