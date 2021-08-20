import React from 'react';
import './style.css';

import FlightSearch from './components/FlightSearch/FlightSearch';
import FlightOffers from './components/FlightOffers/FlightOffers';

import { apimock_flightoffers_response } from './components/FlightOffers/apimock_flightoffers_response';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      apikey: '[YOUR_API_KEY_HERE]'
    };
  }

  updateSearchResults = async results => {
    console.log('updateSearchResults');
    await this.setState({ data: results });
  };

  onChangeHandler = async event => {
    event.preventDefault();
    let nam = event.target.name;
    let val = event.target.value;
    await this.setState({ [nam]: val });
  };

  useMock = async event => {
    await this.setState({ data: apimock_flightoffers_response });
  };

  render() {
    return (
      <div class="container">
        <h1>Universal Flight Search Widget</h1>
        <div class="form-group row">
          <div class="col-12">
            <label for="apikey">API Authentication Key:</label>
            <input
              type="text"
              class="form-control"
              name="apikey"
              id="apikey"
              value={this.state.apikey}
              onChange={this.onChangeHandler}
              style={{ width: '500px' }}
            />
            <label for="useMock">or...</label>
            <button
              id="useMock"
              type="button"
              class="btn btn-primary"
              onClick={this.useMock}
            >
              Use Mock Response
            </button>
          </div>
        </div>

        <div class="form-row">
          <div class="col" />
        </div>
        <div class="alert alert-info h3" role="alert">
          Flight Search
        </div>
        <FlightSearch
          updateSearchResults={this.updateSearchResults}
          apikey={this.state.apikey}
        />
        <div class="alert alert-info h3" role="alert">
          Flight Search Response
        </div>
        <FlightOffers data={this.state.data} />
      </div>
    );
  }
}
