module.exports =  queryFilter = ((req,res,next)=>{
    const age = req.query.age;
    if(!age){
        res.send("Enter Age");
        next()
    } else if(age<18){
        res.send("Age Should be greater then 18");
    }else if(age > 100){
        res.send("Enter Valid Age");
    }
    else{
        next()
    }
    
})