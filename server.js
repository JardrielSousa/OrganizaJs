const express = require('express');
const path = require('path');
const nomeApp = process.env.fronEnd;
const app = express();

app.use(function(req, res, next) {
    if (req.url === '/index.html') {
        res.redirect(301, 'https://' + req.hostname);
      }   
     next()
  })
  app.get("/", function(req, res) {
    console.log("requisição")
    res.send("/")
  })
 
app.listen(process.env.PORT || 8081);