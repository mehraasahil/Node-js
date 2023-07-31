const { render } = require('ejs');
const express = require('express');
const path  =  require('path');

const app = express();

const publicPath = path.join(__dirname,'public')

app.set('view engine','ejs')

app.get('/profile',(res,resp)=>{

    const user = {
        name:'Sahil mehra',
        email : 'mehra3249@gmail.com',
        city:'FZR',
        skills: ['html','css','js','react']
    }


    resp.render('profile',{user})
})
app.get('/login',(req,resp)=>{
resp.render('login')

})
app.listen(4500)