const express = require('express')
const app = express();
const expressPort = 3000

app.listen(expressPort, () => {
    console.log(`App listening on port ${expressPort}`)
})

app.set('view engine', 'pug');
// app.set('views', './views');
// app.set('views', '.');

app.use('/lib/bootstrap', express.static('node_modules/bootstrap/dist'))

app.get('/', (req, res) => {
    const options = {
        name: 'Jowie',
        age: 26
    }
    res.render('index', options);
})