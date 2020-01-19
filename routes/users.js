const express = require('express')
let User = require('../models/user-model')

const router = express.Router()

router.route('/').get((req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json(err))  
})

router.route('/add').post((req,res) => {
    const username = req.body.username
    const password = req.body.password
    const newUser = new User({username, password})

    newUser.save()
    .then(() => res.json('User added'))
    .catch(err => res.status(400).json(err))
})

module.exports = router