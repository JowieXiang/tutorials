const express = require('express'),
    app = express(),
    expressPort = 3000;


app.listen(expressPort, () => {
    console.log('listening on ' + expressPort);
})

let count = 0;
app.use(function (req, res, next) {
    count++;
    console.log('root visited: ', count);
    next();
})

app.use('/',
    function (req, res, next) {
        console.log("/ visited");
        next();
    },
    function (req, res, next) {
        console.log("/ visited again");
        next();
    },
    function (req, res, next) {
        res.send('index');
    }
);



app.use('/public', express.static(`${__dirname}/public`));

