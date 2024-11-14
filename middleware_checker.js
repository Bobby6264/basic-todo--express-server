const express = require("express");

const app = express();
const PORT = 3000;
app.use(express.json());

// another way of using an middle ware for all the given routes is to apply app.use(middleware) at the top 

// app.use(ismoenyenough);

//function is oldenough middleware
function isOldEnough(req,res,next){
    const age = req.body.age;
    if(age>=18){
        next();
    }else{
        res.json({
            msg:"you are not old enough"
        })
    }
}

// function ismoneyenough middleware
function isMoneyEnough(req,res,next){
    const money = req.body.money;
    if(money>=500){
        next();
    }else{
        res.json({
            msg:"you dont have enough money"
        })
    }
}


app.post("/ride1",isMoneyEnough,isOldEnough,(req,res)=>{
    res.json({
        msg:"you can ride!, you are old enough and have enough money",
        msg2:"All the best"
    })
})

app.listen(PORT);