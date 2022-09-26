var http = require("http");
var unirest = require('unirest');
var request = require('request');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    
    const report = getReport();

    console.log(report);

    res.end('Example of a simple weather report using the weather.gov API\n');
}).listen(5000, () => console.log('Server running at http://127.0.0.1:5000/'));


async function findGrid (lat, long) {
    // Get the location lat and long
    var options = {
        'method': 'GET',
        'url': 'https://api.weather.gov/points/' + lat + long ,
        'headers' : {
            'User-Agent': 'PostmanRuntime/7.29.2'
        }
    };
    request(options, function (error, response) {
        if (error) throw new Error(error);
        return response.body;
    })
}

async function getReport () {
    const gridData = await findGrid(45.4664,-122.653);
    const gridX = gridData.properties.gridX;
    const gridY = gridData.properties.gridY;
    const office = gridData.properties.cwa;

    var options = {
        'method': 'GET',
        'url': `https://api.weather.gov/points/${office}/${gridX},${gridY}/forecast`,
        'headers' : {
            'User-Agent': 'PostmanRuntime/7.29.2'
        }
    };

    request(options, function (error, response) {
        if (error) throw new Error(error);
        return response.body;
    })

}


    /*
    const locationOptions = {
        headers: {
            'User-Agent': 'PostmanRuntime/7.29.2'
        },
    };

    const locationData = await
    //const locationData = await got.get('https://api.weather.gov/points/' + lat + ',' + long, locationOptions).json();
    
    const gridX = data.properties.gridX;
    const gridY = data.properties.gridY;
    const office = data.properties.cwa;
    
    const weatherData = await got.get('https://api.weather.gove/gridpoints/' + office + '/' + gridX + ',' + gridY + '/forecast', locationOptions).json();
    
    console.log(weatherData);
   */