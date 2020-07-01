const express = require('express'),
    app = express(),
    expressPort = 3000,
    cors = require('cors');


app.listen(expressPort, () => {
    console.log('listening on ' + expressPort);
})

app.get('/', cors(), (req, res, next) => {
    res.json('connected');
})
