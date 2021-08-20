# Universal Flight Search Widget

A flight search POC based on [ReactJS](https://reactjs.org/) + [react-bootstrap] (https://react-bootstrap.github.io/) + [Duffel API](https://duffel.com/docs/api/overview/welcome)

[Fork it on GitHub ](https://github.com/tripsimian/react-flight-search-demo-v1/)

[Try on StackBlitz ⚡️](https://stackblitz.com/github/tripsimian/react-flight-search-demo-v1)

## Note - CORS issues with StackBlitz
Calling external APIs from a web page can be tricky.  CORS restrictions often do not allow API calls from unauthorized clients leading to hard-to-debug errors.  This can be painful for a proof-of-concept such as this one.  

[CORS-anywhere](https://github.com/Rob--W/cors-anywhere/) is used here as a development workaround ; a kind of proxy between the target API endpoint and the client, stripping out CORS constraints.  

If this demo is not working, check the debug info for errors.  You may need to activate the CORS workaround for your browser by clicking here https://cors-anywhere.herokuapp.com/

Also see: https://stackoverflow.com/questions/50328875/testing-fetch-api-with-jsfiddle-cors-errors/50328895