const express = require('express')
const mongoose = require('mongoose')
const url = 'mongodb://localhost/alien'

const app = express()

mongoose.connect(url,{useNewUrlParser:true})
const con = mongoose.connection

con.on('open',() => {
    console.log('connected...');
})

const alien = require('./routes/aliens')
app.use('/aliens', alien)


app.listen(9000, function(){
    console.log('Server started')
})