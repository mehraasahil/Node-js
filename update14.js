const dbConnect = require("./mongo11");

const updateData = async ()=>{
    let data = await dbConnect();
    let result = await data.updateMany(
        {name:'Sonyeric'},{$set:{brand:'ericsonxpreia'}} 
    )
    console.log(result)

}

updateData();