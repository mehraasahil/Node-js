const  mongoose  = require("mongoose");


    mongoose.connect("mongodb://127.0.0.1:27017/e-comm");
    const productSchema = new  mongoose.Schema({
        name:String,
        price : Number,
        brand:String
    });  
const main = async()=>{
const ProductModel = mongoose.model('products',productSchema)
let data = new ProductModel({name:"sahil",price:1000,brand:"Dell"})
let result = await data.save();
console.log(result)    
}
//main();

const updateInDB = async()=>{
    const ProductModel = mongoose.model('products',productSchema)
    let data =  await ProductModel.updateOne(
        {name:"Sonyeric"},{$set:{price:66000}}
    )
    console.log(data)
}
//updateInDB();

const deleteDB = async()=>{
    const ProductModel = mongoose.model('products',productSchema)
    let data =  await ProductModel.deleteOne(
        {name:"Sonyeric"}
    )
    console.log(data)

}
//deleteDB()
const findDB = async() =>{
    const ProductModel = mongoose.model('products',productSchema)
    let data =  await ProductModel.find(
        {name:"Sonyeric"}
    )
    console.log(data)

}
findDB(); 