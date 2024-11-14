const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
app.use(express.json());

// middle ware is a function that takes 3 arguments
// req, res, next
// ex
app.get("/users", function (req, res, next) {
    // check the requriements here and if correct then got to next
    console.log("middleware");
    next();
}, function (req, res) {
    res.json({
        msg: "users"
    });
});

app.post("/health-check",(req,res)=>{
    const kidney = req.body.kidney;
    const kidLen = kidney.length;

    res.send("you have "+kidLen+" kidneys");
})

// global catch 
app.use((err, req, res, next) => {
    res.json({
        msg: "error"
    });
});

app.listen(3000);