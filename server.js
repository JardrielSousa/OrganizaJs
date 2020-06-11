const express = require('express');
const path = require('path');
const nomeApp = process.env.fronEnd;
const app = express();
 
app.use(express.static(`${__dirname}/dist/fronEnd`));
 
app.get('/*', (req, res) => {
res.sendFile(path.join(`${__dirname}/dist/fronEnd/index.html`));
});
 
app.listen(process.env.PORT || 8081);