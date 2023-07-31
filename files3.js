const fs = require('fs')
const path = require('path')


const dirPath=path.join(__dirname ,'files' )   //to make the make set the first directory or loaction files is folder name

for(i=0;i<5;i++){
    fs.writeFileSync(dirPath +"/sahil"+i+".txt",'this is sahil file')
}

//readdir is read the files folder 
fs.readdir(dirPath,(error , files)=>{
    // console.log(files[0])
    files.forEach((item)=>{
     console.log('file name is ',item)

    })

})



