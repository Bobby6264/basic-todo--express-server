const express = require("express");
const app = express();
const zod = require("zod");
const PORT = 3000;

const schema = zod.array(zod.number());

app.use(express.json());

app.post("/next-level",(req,res)=>{
    const kidney = req.body.kidney;
    const response = schema.safeParse(kidney);
    res.send({
        response
    })
});

app.listen(PORT);