const winston = require('winston');
const { combine, timestamp, colorize, printf } = winston.format;

const myFormat = printf(info => {
    return `[${info.timestamp}] ${info.level}: ${info.message}`;
});

const logger = winston.createLogger({
    transports: [
        // new winston.transports.File({
        //     level: 'info',
        //     filename: '../logs/combined.log',
        //     handleExceptions: true,
        //     json: true,
        //     maxsize: 5242880,
        //     maxFiles: 5,
        //     colorize: false
        // }),
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true,
            json: false,
            colorize: true,
            format: combine(
                colorize(),
                timestamp(),
                myFormat
            )
        })
    ],
    exitOnError: false
});

module.exports = logger;