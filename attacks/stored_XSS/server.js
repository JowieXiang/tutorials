const express = require('express'),
    app = express(),
    expressPort = 3002,
    fs = require('fs');

app.listen(expressPort, () => {
    console.log('Listening on ' + expressPort);
})

app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res, next) => {
    res.sendFile(`${__dirname}/public/index.html`);
})

app.post('/add', (req, res, next) => {
    fs.readFile(`${__dirname}/public/data.json`, 'utf8', function callback(err, data) {
        if (err) {
            console.log(err);
        } else {
            const obj = JSON.parse(data);
            obj.push(req.query.content);
            const json = JSON.stringify(obj);
            fs.writeFileSync(`${__dirname}/public/data.json`, json, 'utf8', callback);
        }
    });
    res.send('success');
})
