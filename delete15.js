
const dbConnect = require("./mongo11");

const deletData = async()=>{
    let data = await dbConnect()
    let result = await data.deleteOne(
        {
            name:'blackberry'
        }
    )
    console.log(result)
}

deletData();