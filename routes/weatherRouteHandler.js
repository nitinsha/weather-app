const express = require('express');
const router = express.Router();
const joiSchemaValidation = require('../helpers/joiSchemaValidation');
const weatherController = require('../controllers/weatherController');
const weatherSchema = require('../models/api/weatherSchema');

router.get("/current",joiSchemaValidation.validateQueryParams(weatherSchema.getWeatherQuerySchema),weatherController.getWeatherByCityName);
router.get("/forecast",joiSchemaValidation.validateQueryParams(weatherSchema.getWeatherQuerySchema),weatherController.getForecastByCityName);

module.exports = router;


