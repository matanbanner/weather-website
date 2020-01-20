const request = require('request')

const forecast = (latitude, longtitude, callback) => {
    const url = `https://api.darksky.net/forecast/8c4e56eb066627bf2a2df22252b156dc/${latitude},${longtitude}?units=si`
    request({url: url, json: true}, (_error, {body: {error, currently: {temperature, precipProbability}, daily}}) => {
        if (_error) {
            callback('Service unreachable!', undefined)
        } else if (error) {
            callback('Unable to find locations', undefined)
        } else {
            callback(undefined, daily.data[0].summary + ' It is currently ' + temperature + ' degrees out. There is a ' + precipProbability * 100 + '% chance of rain.')
        }
    })
}


module.exports = forecast 