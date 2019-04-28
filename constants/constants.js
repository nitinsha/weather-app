module.exports={
    serverErrorResponseObj:{
        status:500,
        message:'Internal Server Error',
        body: {}
    },
    controllerStatus:{
        BAD_REQUEST: 'Required missing fields'
    },
    serviceStatus:{
        CITY_WEATHER_FETCHED_SUCCESSFULLY:'weather fetched successfully',
        CITY_FORECAST_FETCHED_SUCCESSFULLY:'forecast fetched successfully',
        CITY_WEATHER_FETCHED_ERROR:'error while fetching weather',
        CITY_FORECAST_FETCHED_ERROR:'error while fetching forecast'

    }
};