import React from 'react';
import FlightOffer from './FlightOffer';

export default class FlightOffers extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const response = this.props.data;
    if (response.data == null)
      return (<div> Awaiting response</div>);
    else  return (
      <div id="flightSearchResponse">
          <div>
              {response.data.offers.map((offer, index) => (
                <FlightOffer key={index} offer={offer} />
              ))}
            </div>
      </div>
    );
  }
}
