const DEBUG = true;
const API_URL = 'https://api.duffel.com/air/offer_requests';

// Workaround for CORS issues with API calls,
// see: https://stackoverflow.com/questions/50328875/testing-fetch-api-with-jsfiddle-cors-errors/50328895
const CORS_URL = 'https://cors-anywhere.herokuapp.com/';

const FETCH_URL = CORS_URL + API_URL;

export async function flightsearchservice(request) {
  // BUILD REQUEST
  var formatted_departuredate = request.departuredate
    .toISOString()
    .slice(0, 10);
  console.log('formatted_departureDate: ' + formatted_departuredate);
  var json_request_data = {
    data: {
      passengers: [
        {
          type: 'adult'
        }
      ],
      slices: [
        {
          origin: request.departurelocation,
          destination: request.arrivallocation,
          departure_date: formatted_departuredate
        }
      ],
      cabin_class: 'economy'
    }
  };
  console.log(json_request_data);
  var json_request_headers = {
    Accept: 'application/json, text/plain, */*',
    'Content-Type': 'application/json',
    'Duffel-Version': 'beta',
    Authorization: 'Bearer ' + request.apikey
  };
  console.log(json_request_headers);

  // FETCH REQUEST
  var responseJson;
  var fetch_url = FETCH_URL;
  const response = await fetch(fetch_url, {
    method: 'POST',
    headers: json_request_headers,
    body: JSON.stringify(json_request_data)
  });
  const responseJSON = await response.json();
  return responseJSON;
}
