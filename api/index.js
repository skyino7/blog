const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config()

const salt = bcrypt.genSaltSync(10);
const secret = '3YHeXFSTUD0DepVCsdscsd2435wdaDWSDAWassd';
const mongodbUrl = process.env.MONGODB_URL


app.use(cors());
app.use(express.json());
mongoose.connect(mongodbUrl)


app.post('/register', async (req, res) => {
    const {Username, Password} = req.body;
    try{
        const userDoc = await User.create({
            Username,
            Password: bcrypt.hashSync(Password, salt),
        });
        res.json(userDoc);
    } catch(e) {
        // return res.status(400).json({ error: 'Username already exist' });
        res.status(400).json(e);
    }

});

app.post('/login', async (req, res) => {
    const {Username, Password} = req.body;
    const userDoc = await User.findOne({Username});
    const passOk = bcrypt.compareSync(Password, userDoc.Password);
    if (passOk) {
        jwt.sign({Username,id:userDoc._id}, secret, {}, (err, token) => {
           if (err) {
            res.cookie('token', token).json({Ok});
           }
        });
        // res.json(userDoc);
    } else {
        res.status(400).json({error: 'Wrong Credentials'});
    }

});

app.listen(process.env.PORT);