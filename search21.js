const express = require('express');

require('./config18');
const Product = require('./product19');

const app = express();
app.use(express.json())

app.get('/search/:key',async(req,resp)=>{
    console.log(req.params)
    let data = await Product.find({
       "$or":[
        {"name":{$regex:req.params.key}}
       ]
    })
    resp.send(data)

})

app.listen(4000);