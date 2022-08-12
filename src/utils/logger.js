// WINSTON IMPORT
// https://github.com/winstonjs/winston
const winston = require('winston');
const { format } = require('winston');
const { timestamp, combine, printf, errors } = format;


// BESPOKE LOGGER FORMAT
const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

// LOGGER
const logger = winston.createLogger({
  defaultMeta: { service: 'scientia-service' },
  transports: [new winston.transports.Console({
    level: 'silly',
    format: combine(
      format.colorize(),
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      errors({ stack: true }),
      logFormat
    )
  })
  ],
});

// MODULE EXPORT
module.exports = logger;