// 创建可写流
const {Writable} = require('stream')
const stream = new Writable({
  objectMode: false,
  write: raw => console.log('stream msg', raw.toString())
})
// 创建http服务
const http = require('http')
http
  .createServer((req, res) => {
    const arr = []
    req
      .on('data', chunk => arr.push(chunk))
      .on('end', () => {
        const msg = Buffer.concat(arr).toString()
        console.log('http msg', msg)
        res.end(msg)
      })
  })
  .listen(8080)
// 配置 4 种通道
const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({filename: 'combined.log'}),
    new winston.transports.Http({host: 'localhost', port: 8080}),
    new winston.transports.Stream({stream})
  ]
})
// 传输到通道
logger.info('winston transports')
