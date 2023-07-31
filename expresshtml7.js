const express = require('express')
const path = require('path')

const app = express()

const publicPath = path.join(__dirname,'public');
console.log(publicPath)


//app.use(express.static(publicPath))

app.get('/about',(req,resp)=>{
    resp.sendfile(`${publicPath}/about.html`)
})


app.get('/desc',(req,resp)=>{
    resp.sendFile(`${publicPath}/desc.html`)

})

app.listen(5500)