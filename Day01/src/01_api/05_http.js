const http = require('http')
const fs = require('fs')
http.createServer((request, response) => {
    // console.log('a request', getPrototypChain(request))
    // TODO  流 request response
    // response.end('Hi Node') // 好理解 1 好 0 不好
    // 语义化
    // Best or nothing

    // response = 'hahaha'
    // response.body = 'heiehie'

    const {url, method, headers} = request
    console.log('url:' + url)
    if(url === '/' && method === 'GET') {
        //index.html
        fs.readFile('index.html', (err, data) => {
            if(err) {
                response.writeHead(500 , {
                    'Content-Type': 'text/plain;charset=utf-8'
                })
                // 中文
                response.end('500 服务器挂了')
                return
            }
            response.statusCode = 200
            response.setHeader('Content-Type', 'text/html')
            response.end(data)
        })

    } 
    else if( url === '/users' && method === 'GET') {
        response.writeHead(200, {'Content-Type':'application/json'})
        response.end(JSON.stringify({name : 'tom'}))
    }
    else if(method === 'GET' && headers.accept.indexOf('image/*') !== -1) {
        // 所有的图片
        // 直接用readFile读取 是否ok 把全部图片内容加载到服务器
        // stream 流 url /1.png => ./1.png
        fs.createReadStream('.' + url).pipe(response)

    }
    
    else {
        response.statusCode = 404
        response.setHeader('Content-Type','text/plain;charset=utf-8')
        response.end('404 没这玩意')
    }

})
.listen(3000, () => {
    console.log('Server at 3000')
})

// Java 
function getPrototypChain(obj) {
    const protoChain = []
    while(obj = Object.getPrototypeOf(obj)) {
        protoChain.push(obj)
    }
    return protoChain
}

