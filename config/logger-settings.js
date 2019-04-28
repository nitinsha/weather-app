const winston = require('winston');

const logConfigurations ={
    transports: [
        new winston.transports.File({
            level: 'debug',
            filename: '../../logs/combined.log'
        }),
        new winston.transports.File({
            level: 'error',
            filename: '../../logs/error.log'
        })
    ]
};

module.exports.logger = winston.createLogger(logConfigurations);


 