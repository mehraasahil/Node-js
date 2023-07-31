const { isUtf8 } = require('buffer')
const fs = require('fs')
const path =require('path')

const dirPath = path.join(__dirname,'crud')

const filepath = `${dirPath}/apple.txt`

// fs.writeFileSync(filepath,'THIS IS APPLE FILE')


// for READ

// fs.readFile(filepath,'utf8',(err,item)=>{
//     console.log(item)

// })

// for append

// fs.appendFile(filepath,'amd file is appended',(err)=>{
//     if(!err){
//         console.log('fileupdated')
//     }
// })

// for rename

// fs.rename(filepath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err)
//     console.log('file renamed')

// })

// fs.unlinkSync(`${dirPath}/fruit.txt`)