import React from 'react';

export default class FlightPrice extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const offer = this.props.offer;
    return (
      <div>
        <div class="row">
          <div class="col col-sm-2">Price: </div>
          <div class="col col-sm-2">offer.total_amount </div>
          <div class="col col-sm-auto">offer.slices[0].fare_brand_name</div>
        </div>
      </div>
    );
  }
}
