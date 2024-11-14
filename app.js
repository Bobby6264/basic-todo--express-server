const express = require("express");
const app = express();

function calculatesum(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

app.get("/",(req,res)=>{
    const n = req.query.n;
    let ans = calculatesum(n);
    res.send(ans.toString());
    // console.log(ans);
})

app.listen(3000);
