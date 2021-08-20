import React from 'react';
import './style.css';

import FlightSearch from './components/FlightSearch/FlightSearch';
import FlightOffers from './components/FlightOffers/FlightOffers';

import { apimock_flightoffers_response2 } from './components/FlightOffers/apimock_flightoffers_response2';

export default class App extends React.Component {
  

  constructor(props) {
    super(props);
    this.state = {
      data: {},
      apikey: '[YOUR_API_KEY_HERE]'
    };
  }

  updateSearchResults = async (results) => {
    console.log("updateSearchResults");
    await this.setState({data: results});
  }

  onChangeHandler = async (event) => {
    event.preventDefault();
    let nam = event.target.name;
    let val = event.target.value;
    await this.setState({ [nam]: val });
  };

  render() {
    return (
      <div class="container">
        <h1>Universal Flight Search Widget</h1>
        <div class="form-row align-items-center">
          <div class="col-sm-3 my-1">
            <label for="text">API Authentication Key:</label>
            <div class="input-group">
              <input type="text" class="form-control" name="apikey" id="apikey"
               value={this.state.apikey} onChange={this.onChangeHandler} />
            </div>
          </div>
        </div>        
        <div class="alert alert-info h3" role="alert">
          Flight Search
        </div>
        <FlightSearch updateSearchResults={this.updateSearchResults} apikey={this.state.apikey} />
        <div class="alert alert-info h3" role="alert">
          Flight Search Response
        </div>
        <FlightOffers data={this.state.data} />
      </div>
    );
  }
}
