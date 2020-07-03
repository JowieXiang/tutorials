const express = require('express'),
    app = express(),
    expressPort = 3000;

app.listen(expressPort, () => {
    console.log('Listening on ' + expressPort);
})

app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res, next) => {
    res.sendFile(`${__dirname}/public/index.html`);
})
