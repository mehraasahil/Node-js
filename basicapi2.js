const http = require('http')
const data = require('./data2')

const colors= require('colors')

console.log('Sahil Mehra'.red)

http.createServer((req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(data))
    resp.end()

}).listen(5000)