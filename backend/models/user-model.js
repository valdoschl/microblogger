const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        minlength: 4,
        maxlength: 20
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 20
    }
})

const User = mongoose.model('User', userSchema)

module.exports = User