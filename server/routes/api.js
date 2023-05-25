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
            res.status(200).send(user)
        }
    })
})

router.get('/events', (req,res) => {
    let events = [
      {
        "_id": "1",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "2",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "3",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "4",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "5",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "6",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      }
    ]
    res.json(events)
  })

  router.get('/special', (req,res) => {
    let events = [
      {
        "_id": "1",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "2",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "3",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "4",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "5",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      },
      {
        "_id": "6",
        "name": "Auto Expo",
        "description": "lorem ipsum",
        "date": "2012-04-23T18:25:43.511Z"
      }
    ]
    res.json(events)
  })

module.exports = router