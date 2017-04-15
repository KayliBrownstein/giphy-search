import React, { Component } from 'react';

const SearchBar = (props) => {
    return(
      <div className="form">
        <form onSubmit={props.onSubmit}>
          <input
            type='text'
            placeholder='Search Term'
            onChange={props.onChange}
            value={props.term} />
          <input
            type='submit'
            value='Submit' />
        </form>
      </div>
  )
}

export default SearchBar;
