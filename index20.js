const express = require('express');

require('./config18')
const Product = require('./product19')

const app = express();
app.use(express.json());

app.post('/create',async(req,resp)=>{
    let data = new Product(req.body);
    let result = await data.save()
    console.log(result)
    resp.send(result)
});

app.get('/list',async (req,resp)=>{
    let data = await Product.find()
    resp.send(data);

})

app.delete('/delete/:_id',async(req,resp)=>{
    let data = await Product.deleteOne(req.params)
   console.log(req.params)
   resp.send(data)
})

app.put('/update/:_id', async (req,resp)=>{
    let data =  await Product.updateOne(
        req.params,
        {
            $set: req.body
        }
    )
    console.log(data)

    resp.send(data)
})
app.listen(4000);