const express = require('express'),
    app = express(),
    expressPort = 3001;

app.listen(expressPort, () => {
    console.log('Listening on ' + expressPort);
})

app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res, next) => {
    res.sendFile(`${__dirname}/public/index.html`);
})

app.post('/query', (req, res, next) => {
    res.send(req.query.text);
})



