const APIBase = 'https://coronavirus-monitor.p.rapidapi.com/coronavirus/'
const params = {
	country: 'Netherlands'
}

const endpoints = {
	countryHistory: 'cases_by_particular_country',
	perCountry: 'cases_by_country'
}

getCoronaData(endpoints.perCountry)
getCoronaData(endpoints.countryHistory, params)

function getCoronaData(endpoint, params){
	fetch(addURLParams(APIBase + endpoint + '.php', params), {
	    "method": "GET",
	    "headers": {
	        "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
	        "x-rapidapi-key": "" // don't forget to place your key here or the code will not work
    	}
	})
	.then(response => response.json())
	.then(data => {
	    console.log(data);
	})
	.catch(err => {
	    console.log(err);
	});
}

function addURLParams(endpoint, params){
	if (!params) {
		return endpoint
	}
	let constructedURL = new URL(endpoint)
	Object.keys(params).forEach(key => constructedURL.searchParams.append(key, params[key]))
	return constructedURL
}
