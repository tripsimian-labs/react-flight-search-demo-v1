import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import CardHeader from 'react-bootstrap/CardHeader';
import Flight from './Flight';

export default class FlightOffer extends React.Component {
  constructor(props) {
    super(props);
  }

  onDetailsHandler = e => {
    alert('Offer ID: ' + e.target.id);
  };
  render() {
    const offer = this.props.offer;

    return (
      <div key={offer.id}>
      <Accordion>
        <Accordion.Item eventKey={offer.id}>
          <Accordion.Header>
            <Card  border="primary" style={{ width: '100%' }}>
              <CardHeader>
              <div class="row">
                <div class="col-2 col-md-2">Origin: </div>
                <div class="col">{offer.slices[0].origin.name}</div>
              </div>
              <div class="row">
                <div class="col-2 col-md-2 ">Destination: </div>
                <div class="col">
                  {offer.slices[0].destination.name}
                </div>
              </div>
              </CardHeader>
              <div class="row">
                <div class="col-1 col-md-1">Price: </div>
                <div class="col">{offer.total_amount} </div>
              </div>
              <div class="row">
                <div class="col-1 col-md-1">Fare Brand: </div>
                <div class="col">
                  {offer.slices[0].fare_brand_name}
                </div>
              </div>
            </Card>
            <div class="row">
                <div class="col-1 col-md-1">
                  <input
                    class="btn btn-primary"
                    type="submit"
                    value="Details"
                    id={offer.id}
                    onClick={this.onDetailsHandler}
                  />
                </div>
              </div>
          </Accordion.Header>
          <Accordion.Body>
            <div class="row">
              {offer.slices[0].segments.map(segment => (
                <Flight segment={segment} />
              ))}
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      </div>
    );
  }
}
