const joi = require('joi');

const getWeatherQuerySchema = joi.object().keys({
    city: joi.string().required()
});

module.exports = {
    'getWeatherQuerySchema': getWeatherQuerySchema                            
};