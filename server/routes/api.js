const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router()
const User = require('../models/user')

const db = 'mongodb+srv://Tornike:ChooseYourPassword1@events-db.gc9hf4s.mongodb.net/';

mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true } )
.then(() => console.log('Connected Successfully'))
.catch((err) => { console.error(err); });

router.get('/',  (req, res) => {
    res.send('From API')
})


router.post('/register', (req, res) => {
    let userData = req.body;
    let user = new User(userData)
    user.save((error , registerUser) => {
        if (error) {
            console.log(error)
        }else {
            res.status(200).send(registerUser)
        }
    })
})

module.exports = router