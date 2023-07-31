
module.exports = reqFilter=(req,resp,next)=>{
    console.log('reqFilter');
    if(!req.query.age){
        resp.send('Please provide the age')
    }

    else if(req.query.age<18){
        resp.send('Please proovide proper age')
    }
    else{

    }
    next();
}


