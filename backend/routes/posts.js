const express = require('express')
let BlogPost = require('../models/post-model')

const router = express.Router()

router.route('/').get((req,res) => {
    BlogPost.find()
    .then(posts => res.json(posts))
    .catch(err => res.status(400).json(err))  
})

router.route('/add').post((req,res) => {
    const post = req.body.post
    const poster = req.body.poster
    const newPost = new BlogPost({poster, post})

    newPost.save()
    .then(() => res.json('Post added'))
    .catch(err => res.status(400).json(err))
})

module.exports = router