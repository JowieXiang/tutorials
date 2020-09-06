const express = require('express')
const app = express()
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
require('dotenv').config()


app.use(express.urlencoded({ extended: false }))

mongoose.connect(process.env.authURI, { useNewUrlParser: true })
    .then(() => console.log('MongoDB Connected...'))
    .catch(err => console.log(err))

const UserModel = require('./models/User')

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
    const user = await UserModel.findOne({name: req.body.name})
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

        const newUser = new UserModel({
            name: req.body.name,
            password: hashedPassword
        })
        await newUser.save()
        res.redirect('/login')
    }
    catch{
        res.redirect(500, '/register')
    }
})

