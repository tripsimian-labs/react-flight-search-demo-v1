import React from 'react';
import {
  RangeDatePicker,
  SingleDatePicker
} from 'react-google-flight-datepicker';
import 'react-google-flight-datepicker/dist/main.css';

import fontawesome from '@fortawesome/fontawesome';
import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlaneArrival,
  faPlaneDeparture,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';

import { flightsearchservice } from './FlightSearchService';
import { paxno_options, cabin_options } from './FlightSearchConst';

fontawesome.library.add(faPlaneArrival, faPlaneDeparture, faCalendarAlt);

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center'
};

export default class FlightSearchForm extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      isSearching: false,
      apikey: '',
      departurelocation: 'CDG',
      arrivallocation: 'LHR',
      departuredate: new Date().setMonth(new Date().getMonth()+1),
      paxno: '',
      cabin: ''
    };
  }

  onSubmitHandler = async (event) =>  {
    event.preventDefault();
    await this.setState({apikey: this.props.apikey});
    await this.setState({isSearching: true});
    alert('You are submitting ' + JSON.stringify(this.state));
    let response = await flightsearchservice(this.state);
    console.log('json echo response: ' + JSON.stringify(response));
    this.setState({isSearching: false});
    this.props.updateSearchResults(response);
    //apply responseJson to flight shopping component here
  };

  onChangeHandler = async (event) => {
    let nam = event.target.name;
    let val = event.target.value;
    await this.setState({ [nam]: val });
  };
  onDateChangeHandler = async (date)  => {
    console.log(date);
    await this.setState({ departuredate: date });
    return date;
  };

  render() {
    return (
      <div id="flightSearchForm" name="flightSearchForm">
        <div class="form-row align-items-center">
          <div class="col-sm-3 my-1">
            <label for="from">From</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <FontAwesomeIcon icon="plane-departure" />
                </div>
              </div>
              <input
                type="text"
                class="form-control text-uppercase "
                name="departurelocation"
                id="departurelocation"
                value={this.state.departurelocation}
                onChange={this.onChangeHandler}
              />
            </div>
          </div>
          <div class="col-sm-3 my-1">
            <label for="to">To</label>
            <div class="input-group">
              <div class="input-group-prepend">
                <div class="input-group-text">
                  <FontAwesomeIcon icon={['fas', 'plane-arrival']} />
                </div>
              </div>
              <input
                type="text"
                class="form-control text-uppercase"
                name="arrivallocation"
                id="arrivallocation"
                value={this.state.arrivallocation}
                onChange={this.onChangeHandler}
              />
            </div>
          </div>
        </div>
        <div class="form-row align-items-center">
          <div class="col-sm-3 my-1">
            <label for="dates">Travel Dates</label>
            <div class="input-group">
              <SingleDatePicker
                startDate={this.state.departuredate}
                onChange={startDate => this.onDateChangeHandler(startDate)}
              />
            </div>
          </div>
        </div>
        <div class="form-row align-items-center">
          <div class="col-sm-3 my-1">
            <label for="dates">Passengers</label>
            <div class="input-group">
              <select
                name="paxno"
                id="paxno"
                value="1"
                onChange={this.onChangeHandler}
              >
                {paxno_options.map(option => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
          <div class="col-sm-3 my-1">
            <label for="dates">Cabin</label>
            <div className="select-container">
              <select
                name="cabin"
                id="cabin"
                value="Y"
                onChange={this.onChangeHandler}
              >
                {cabin_options.map(option => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div class="row justify-content-end">
          <div class="col-auto my-1">
            <button
              type="submit"
              class="btn btn-primary"
              onClick={this.onSubmitHandler}
            >
              Search
            </button>
            <div> {this.state.isSearching ? "Searching" : "Ready"}</div>
          </div>
        </div>
      </div>
    );
  }
}
