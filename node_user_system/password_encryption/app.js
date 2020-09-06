const express = require('express')
const app = express()
const bcrypt = require('bcrypt')

app.use(express.urlencoded({ extended: false }))

const users = []

// Views (using Pug template engine)
require('pug')
app.set('views', './views')
app.set('view engine', 'pug')

app.listen(3000, () => { console.log('Listening on 3000...') })

app.get('/', (req, res) => {
    res.render('index.pug')
})

app.get('/login', (req, res) => {
    res.render('login.pug')
})

app.post('/login', async (req, res) => {
    const user = users.find(user => user.name === req.body.name)
    if (user == null) {
        return res.send('username not found')
    }
    try {
        if (await bcrypt.compare(req.body.password, user.password)) {
            res.send('login success')
        } else {
            res.send('password incorrect')
        }
    } catch{
        res.status(500).send('Server error')
    }
})

app.get('/register', (req, res) => {
    res.render('register.pug')
})

app.post('/register', async (req, res) => {
    try {
        // const salt = await bcrypt.genSalt(10)
        // const hashedPassword = await bcrypt.hash(req.body.password, salt)
        const hashedPassword = await bcrypt.hash(req.body.password, 10)

        users.push({
            name: req.body.name,
            password: hashedPassword
        })
        res.redirect('/login')
    }
    catch{
        res.redirect(500, '/register')
    }
})

