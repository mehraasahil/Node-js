const express = require('express');
const reqFilter = require('./middleware10')
const app = express();

const route = express.Router()


//app.use(reqFilter)
route.use(reqFilter)
app.get('/',(req,resp)=>{
    resp.send('This is for middleware')
    
})

app.get('/about',(req,resp)=>{
    resp.send('Welcome to the aboutpage')
})


route.get('/welcome',(req,resp)=>{
    resp.send('Welcome to the homepage')
})


route.get('/contact',(req,resp)=>{
    resp.send('Welcome to the contactpage')
})

app.use('/',route)

app.listen(2000)