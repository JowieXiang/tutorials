const express = require('express'),
    router = express.Router()

router.get('/', (req, res, next) => {
    res.send('blog');
})
router.post('/', (req, res, next) => {
    res.send('posted blog');
})

module.exports = router

