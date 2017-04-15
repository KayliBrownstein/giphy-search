import React, { Component } from 'react';
import DisplayContainer from './DisplayContainer';
import SearchBar from './SearchBar';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      attributes: [],
      term: ''
    };

  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);  }

  handleChange(event){
    this.setState({ term: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch(`http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=dc6zaTOxFJmzC`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
        error = new Error(errorMessage);
        throw(error);
      }
    })
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({ attributes : responseData.data })
    })
  }

  render(){
    return(
      <div className='app-components'>
        <div className='searchbar-container'>
          <SearchBar
            onChange={this.handleChange}
            value={this.state.term}
            onSubmit={this.handleSubmit}
          />
        </div>
        <div className='display-container'>
          <DisplayContainer
            attributes={this.state.attributes}
          />
        </div>
      </div>
    )
  }
}

export default App;
