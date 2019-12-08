const mongoose = require('mongoose')
const Schema = mongoose.Schema


// Add timestamps and date later
const postSchema = new Schema({
    poster: {
        type: String,
        required: true,
    },
    post: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 250
    }}, {
        timestamps: true
    })

const BlogPost = mongoose.model('BlogPost', postSchema)

module.exports = BlogPost