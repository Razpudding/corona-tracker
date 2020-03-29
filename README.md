# corona-tracker

Basic setup for a front-end that consumes data from a corona tracker. In this case the [Coronavirus Monitor API](https://rapidapi.com/astsiatsko/api/coronavirus-monitor/details)

Right now it pulls in data from all countries and the specific data for the Netherlands' history of recorded cases. Might work on this later, might just keep it as an example.

## Usage
Get your own key from the API, plug it in the code, load the code in the browser and check the console for results.
You can change the country and the endpoint easily as per the API's instructions. The example which gets the case history of the Netherlands uses URL parameters and can be reused for other requests that require URL params.
