const express = require('express'),
    app = express(),
    expressPort = 3000,
    blog_routes = require('./routes/blog');

app.listen(expressPort, () => {
    console.log('Listening on ' + expressPort);
})

app.use('/blog', blog_routes);
