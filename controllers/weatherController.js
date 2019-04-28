const constants = require('../constants/constants');
const weatherService = require("../services/weatherService");
module.exports.getWeatherByCityName = async (req,res,next)=>{    
    let responseObj={};
    try{
        let data = {
            cityName: req.query.city
        };
        let serviceResponse = await weatherService.getWeatherByCityName(data);
        switch(serviceResponse.status) {
            case constants.serviceStatus.CITY_WEATHER_FETCHED_SUCCESSFULLY:
                responseObj.status=200;
                responseObj.message=serviceResponse.status;
                responseObj.body=serviceResponse.body;
                break;
            default:
                responseObj=constants.serverErrorResponseObj;
        }
        return res.status(responseObj.status).send(responseObj);
    }catch(err){
        responseObj=constants.serverErrorResponseObj;
        return res.status(responseObj.status).send(responseObj);
    }
}

module.exports.getForecastByCityName = async (req,res,next)=>{
    let responseObj={}
    try{
        let data = {
            cityName: req.query.city
        }       
        let serviceResponse = await weatherService.getForecastByCityName(data)
        switch(serviceResponse.status) {
            case constants.serviceStatus.CITY_FORECAST_FETCHED_SUCCESSFULLY:
                responseObj.status=200
                responseObj.message=serviceResponse.status
                responseObj.body=serviceResponse.body
                break;
            default:
                responseObj=constants.serverErrorResponseObj            
        }
        return res.status(responseObj.status).send(responseObj)
    }catch{
        responseObj=constants.serverErrorResponseObj
        return res.status(responseObj.status).send(responseObj)
    }    
}