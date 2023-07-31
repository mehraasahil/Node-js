const express = require('express');
const  app = express()

// USED TO RENDER THE HTML PAGE

app.get('',(req,resp)=>{
    resp.send(`<h1>THis is Sahi Homepage</h1> <a href='/about'>Clik for about page</a>`)
})

app.get('/about',(req,resp)=>{
    resp.send(`<input type='text placeholder='enter the value' />
    <button>Click</button>
<a href='/help'>Click for help page</a>
    `)
})

app.get('/help',(req,resp)=>{
    resp.send([
        {
            name:'Sahil Mehra',
            email:'mehra3249@gmail.com'
        },
        {
            name:'Sahil',
            email:'mehra9@gmail.com'
        },
        

    ])

})

app.listen(4000)