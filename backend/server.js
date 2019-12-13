const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())


const uri = require('./config/keys')

mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true,useUnifiedTopology: true })
const connection = mongoose.connection
connection.once('open', () => {
    console.log('Database connection established succesfully')
})



const postsRouter = require('./routes/posts')
app.use('/posts',postsRouter)

const usersRouter = require('./routes/users')
app.use('/users',usersRouter)


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})