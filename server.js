const express = require('express');
const path = require('path');
const nomeApp = process.env.fronEnd;
const app = express();

app.use(function(req, res, next) {
    console.log("middleware 1")
    next()
  })
  
  app.get("/", function(req, res) {
    console.log("requisição")
    res.send("Requisição!")
  })
 
app.listen(process.env.PORT || 8081);