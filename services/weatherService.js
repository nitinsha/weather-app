const constants = require('../constants/constants');
const request = require('request-promise');

module.exports.getWeatherByCityName = async (data) => {
    let responseObj = {};
    try {
        const options = {
            method: 'GET',
            uri: 'https://api.openweathermap.org/data/2.5/weather?q=' + data.cityName + '&appid=798283f8003f79b00814beac0ed2f2e8',
            json: true
        };
        await request.get(options)
            .then(res => {
                responseObj.status = constants.serviceStatus.CITY_WEATHER_FETCHED_SUCCESSFULLY;
                responseObj.body = res;
            })
            .catch(err => {
                responseObj.status = constants.serviceStatus.CITY_WEATHER_FETCHED_ERROR;
                responseObj.body = {};
            });
        return responseObj;
    } catch (error) {
        return constants.serverErrorResponseObj;
    }
};

module.exports.getForecastByCityName = async (data) => {
    let responseObj = {};
    try {
        const options = {
            method: 'GET',
            uri: 'https://api.openweathermap.org/data/2.5/forecast?q=' + data.cityName + '&appid=798283f8003f79b00814beac0ed2f2e8',
            json: true
        };
        await request.get(options)
            .then(res => {
                responseObj.status = constants.serviceStatus.CITY_FORECAST_FETCHED_SUCCESSFULLY;
                responseObj.body = res;
            })
            .catch(err => {
                responseObj.status = constants.serviceStatus.CITY_FORECAST_FETCHED_ERROR;
                responseObj.body = {};
            });
        return responseObj;
    } catch (error) {
        return constants.serverErrorResponseObj;
    }
};