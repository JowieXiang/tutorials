const express = require('express'),
    app = express(),
    expressPort = 3000;

app.listen(expressPort, () => {
    console.log('Listening on ' + expressPort);
})

app.get('/', (req, res, next) => {
    res.send('Hello world');
})
