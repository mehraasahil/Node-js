const express = require('express')
const dbConnect = require('./mongo11')

const mongodb = require('mongodb')
const app = express();

app.use(express.json());

app.get('/',async(req,resp)=>{

    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data)
    resp.send(data)

    //resp.send({name:'Sahil'}) just to see in browseer
})


app.post('/',async (req,resp)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    console.log(req.body)
    resp.send(result)
    //resp.send(req.body)
})


app.put('/:name',async(req,resp)=>{
    let data = await dbConnect();
    let result = data.updateOne(
        {name:req.params.name},{$set:req.body}
        )
    console.log(req.body)
    resp.send(req.body)
    //resp.send({result:'update'})
})



app.delete('/:id',async(req,resp)=>{
    let data = await dbConnect();
    console.log(req.params.id)
    let result = await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    resp.send('done')

})

app.listen(5500);