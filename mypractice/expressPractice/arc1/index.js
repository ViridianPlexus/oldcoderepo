var express = require("express")
var app = express()

app.get("/getusers", (req,res)=>{
res.send("hello world")
});

app.listen(4000)