const dbConnect = require("./mongo11");

const insert = async ()=>{
    const db = await dbConnect();
    const result = await db.insertMany(
        [
        {name:'Sonyeric', brand:'Sony',price: 300},
        {name:'Sonyerxperia', brand:'Sony',price: 300},

        ]
    )
    if(result.acknowledged){
        
    console.log('data inserted')
    }
}

insert();