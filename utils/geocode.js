const request = require('request')

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoibWF0YW5iYW5uZXIiLCJhIjoiY2s1M3E3aHF3MGFjZDNrb2YzZTlrOXY0aiJ9.qSqpdJIubo2TS7i5xKZ9Uw&limit=1`
    request({url: url, json: true}, (error, {body} = {}) => {
        if (error) {
            callback("Unable to reach service", undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Please try again with different search terms.', undefined)
        } else {
            const feature = body.features[0]
            callback(undefined, {
                longtitude: feature.center[0],
                latitude: feature.center[1],
                location: feature.place_name
            })

        }
        
    })
}


module.exports = geocode