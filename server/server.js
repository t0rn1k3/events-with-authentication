const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const port = 3000;
const api = require('./routes/api')
const app = express()
app.use(cors())

app.use(bodyParser.json())

app.use('/api', api )

app.get('/', function(req, res){
    res.send('hello')
})

app.listen(port, function(){
    console.log('server works')
}) 