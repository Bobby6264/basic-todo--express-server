const express = require("express");
const PORT = 3000;
const app = express();

app.use(express.json());

const user = [{ name: "JHON", kidney: [{ healthy: false }] }];

function isThereAtleatOneUnhealthyKidney() {
  let ans = false;
  for (let i = 0; i < user[0].kidney.length; i++) {
    if (user[0].kidney == false) {
      ans = true;
      break;
    }
  }
  return ans;
}

app.get("/", (req, res) => {
  const jhonkid = user[0].kidney;
  const numkid = jhonkid.length;
  let numhealthykid = 0;
  for (let i = 0; i < numkid; i++) {
    if (jhonkid[i].healthy === true) {
      numhealthykid++;
    }
  }
  const numunhealthykid = numkid - numhealthykid;
  res.json({
    name: user[0].name,
    kidney: numkid,
    healthykidney: numhealthykid,
  });
});

app.post("/", (req, res) => {
  const ishealthy = req.body.isHealthy;
  user[0].kidney.push({
    healthy: ishealthy,
  });
  res.json({
    msg: "done!",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < user[0].kidney.length; i++) {
    user[0].kidney[i].healthy = true;
  }
  res.json({
    msg: "done!",
  });
});

app.delete("/", (req, res) => {
  const isUnheathyExist = isThereAtleatOneUnhealthyKidney();
  if (isUnheathyExist) {
    const newkidney = [];
    for (let i = 0; i < user[0].kidney.length; i++) {
      if (user[0].kidney[i].healthy) {
        newkidney.push(user[0].kidney[i]);
      }
    }
    user[0].kidney = newkidney;
    res.json({
      msg: "done!",
    });
  }else{
    res.status(411).json({
        msg: "No unhealthy kidney exist"
    })
  }
});

app.listen(PORT);
