const axios = require('axios');

function getGrid(lat, long) {
    var config = {
        method: 'get',
        url: `https://api.weather.gov/points/${lat},${long}`,
        headers: {
            'User-Agent': 'PostmanRuntime/7.29.2'
        }
    }

    axios(config)
    .then(function (response) {
        //console.log(JSON.stringify(response.data));
        return JSON.stringify(response.body);
    })
    .catch(function (error) {
        return error
        //console.log(error);
    });
}

const data = getGrid(45.4664,-122.653);

console.log(data);


