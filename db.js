const mongoose = require('mongoose')

function connect () {
    mongoose.connect('mongodb+srv://althamiz123:althamiz123@cluster0.hqpdk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true , useCreateIndex: true})
}

module.exports = connect
