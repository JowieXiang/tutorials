const express = require('express'),
    app = express(),
    expressPort = 3000;

app.listen(expressPort, () => {
    console.log('Listening on ' + expressPort);
})

app.use('/public', express.static(`${__dirname}/public`))

app.get('/', (req, res, next) => {
    res.sendFile(`${__dirname}/public/index.html`);
})


app.get('/about', (req, res, next) => {
    res.send('about');
})

app.get('/ab?cd', (req, res, next) => {
    res.send('/ab?cd');
})

app.get('/ab+cd', (req, res, next) => {
    res.send('/ab+cd');
})

app.get(/.*man$/, (req, res, next) => {
    res.send('/.*man$/');
})

app.get('/users/:userId/books/:bookId', (req, res, next) => {
    res.send(`userid: ${req.params.userId}  bookId: ${req.params.bookId}`);
})

app.get('/users/:userId.:bookId', (req, res, next) => {
    res.send(`userid: ${req.params.userId}  bookId: ${req.params.bookId}`);
})

app.route('/blog')
    .post((req, res, next) => {
        res.send('posted blog');
    })
    .get((req, res, next) => {
        res.send('blog');
    })
