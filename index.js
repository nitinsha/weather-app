const express = require('express'),
    bodyParser = require('body-parser'),
    weatherRouteHandler = require('./routes/weatherRouteHandler'),
    swaggerUi = require('swagger-ui-express'),
    date = require('date-and-time'),
    app = express(),
    logger = require('./config/logger-settings').logger,
swaggerDocument = require('./swagger/swagger.json');
app.use(bodyParser.json());
//logging middleware
app.use((req, res, next)=>{    
    logger.info(`requested url ${req.url} at ${date.format(new Date(), 'YYYY/MM/DD HH:mm:ss')}`);
    next();
});
app.use('/api/v1/weather', weatherRouteHandler);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
<<<<<<< HEAD
const PORT = process.env.PORT || 5000;
=======
const PORT = process.env.PORT || 5000
>>>>>>> development
app.listen(PORT, () => {
    console.log("Server started on port 3000");
});

module.exports = app;