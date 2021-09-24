const winston = require('winston')
winston.log('info', 'Hello World!')
winston.info('Hello World')


const logger1 = winston.createLogger()
const logger2 = winston.createLogger()
logger1.info('logger1')
logger2.info('logger2')


// 传输通道
const logger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({filename: 'combined.log'})
    ]
  })
  logger.info('console and file')