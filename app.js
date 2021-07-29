const http = require('http')

const server = http.createServer((req, res) => res.end('your created web server '))

server.listen(4000, () => console.log('Server started at port 4000.'))