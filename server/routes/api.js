const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

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
            let payload = { subject : registerUser._id }
            let token = jwt.sign(payload, 'key')
            res.status(200).send({token})
        }
    })
})

router.post('/login', (req, res) => {
    let userData = req.body;
  
    User.findOne({ email : userData.email }, (error, user) => {
        if (error) {
            console.log(error)
        }else 
        if (!user) {
            res.status(401).send('Invalid email')
        }else
        if (user.password !== userData.password) {
            res.status(401).send('Invalid password')
        }else {
            let payload = { subject : user._id }
            let token =  jwt.sign(payload, 'key')
            res.status(200).send({ token })
        }
    })
})

router.get('/events', (req,res) => {
    let events = [
      {
        "_id": "1",
        "name": "Events",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "2",
        "name": "Events",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "3",
        "name": "Events",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "4",
        "name": "Events",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "5",
        "name": "Events",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "6",
        "name": "Events",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "7",
        "name": "Events",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "8",
        "name": "Events",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
    ]
    res.json(events)
  })

  router.get('/special', (req,res) => {
    let events = [
      {
        "_id": "1",
        "name": "Special Events",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "2",
        "name": "Special Events",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "3",
        "name": "Special Events",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "4",
        "name": "Special Events",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "5",
        "name": "Special Events",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "6",
        "name": "Special Events",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "7",
        "name": "Special Events",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "8",
        "name": "Special Events",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
    ]
    res.json(events)
  })

module.exports = router