const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

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

if(process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname,'..','build','index.html'))
    })
}

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
})