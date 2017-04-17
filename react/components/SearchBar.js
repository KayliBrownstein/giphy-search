import React, { Component } from 'react';

const SearchBar = (props) => {
    return(
      <div>
        <form onSubmit={props.onSubmit}>
        <div className="small-12 medium-6 large-6 columns">
          <input className="input custom"
            type='text'
            placeholder='Search Term'
            onChange={props.onChange}
            value={props.term} />
          </div>
          <div className="small-12 medium-6 large-6 columns">
            <input className="button custom"
              type='submit'
              value='Submit' />
          </div>
        </form>
      </div>
  )
}

export default SearchBar;
