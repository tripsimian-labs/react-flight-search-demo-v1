import React from 'react';
import { format } from "date-fns";
import fontawesome from '@fortawesome/fontawesome';
import '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlaneArrival,
  faPlaneDeparture,
  faCalendarAlt
} from '@fortawesome/free-solid-svg-icons';
fontawesome.library.add(faPlaneArrival, faPlaneDeparture, faCalendarAlt);

const airline_icon_url = "https://www.skyscanner.net/images/airlines/small/";

export default class Flight extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const segment = this.props.segment;
    return (
      <div class="card-body justify-content-sm-left">
        <div class="row align-sm-middle">
          <div class="col col-sm-2">
            <img
              src={airline_icon_url + segment.marketing_carrier.iata_code+".png"}
              height="40px" width="*" 
            />
          </div>
          <div class="col col-sm-2">{segment.marketing_carrier.iata_code}
          ({segment.operating_carrier.iata_code})</div>
          <div class="col col-sm-2">
            {segment.marketing_carrier_flight_number}
          </div>
        </div>
        <div class="row">
          <div class="col col-sm-1">
          <FontAwesomeIcon icon={['fas', 'plane-departure']} />
          </div>
          <div class="col col-sm-2">Departure Airport: </div>
          <div class="col col-sm-auto">{segment.origin.iata_city_code}</div>
          <div class="col col-sm-auto">Departure Time:</div>
          <div class="col col-sm-auto">{format(new Date(segment.departing_at), "MMMM do, yyyy H:mma")}</div>
        </div>
        <div class="row">
          <div class="col col-sm-1">
          <FontAwesomeIcon icon={['fas', 'plane-arrival']} />
          </div>
          <div class="col col-sm-2">Arrival Airport: </div>
          <div class="col col-sm-auto">
            {segment.destination.iata_city_code}
          </div>
          <div class="col col-sm-auto">Arrival Time:</div>
          <div class="col col-sm-auto">{format(new Date(segment.arriving_at), "MMMM do, yyyy H:mma")}</div>
        </div>
      </div>
    );
  }
}
