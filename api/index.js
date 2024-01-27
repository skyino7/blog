const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config()
const cookieParser = require('cookie-parser');
const multer = require('multer');
const uploadMiddleware = multer({ dest: 'uploads/' });
const fs = require('fs');

const salt = bcrypt.genSaltSync(10);
const secret = '3YHeXFSTUD0DepVCsdscsd2435wdaDWSDAWassd';
const mongodbUrl = process.env.MONGODB_URL


app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());

mongoose.connect(mongodbUrl);


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
    console.log(req.body);
    if (userDoc && userDoc.Password) {
        const passOk = bcrypt.compareSync(Password, userDoc.Password);
        if (passOk) {
            jwt.sign({Username,id:userDoc._id}, secret, {}, (err, token) => {
                if (err) throw err;
                res.cookie('token', token).json({
                    id:userDoc._id,
                    Username,
                });
                console.log(token);
            });
            console.log(userDoc);
            console.log('Login Successful!');
        } else {
            console.log('Login Failed!');
        }
    } else {
        console.error('User not found');
    }
    // console.log(userDoc);
});

app.get('/profile', (req, res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    });
});

app.post('/logout', (req, res) => {
    res.clearCookie('token').json({ok: true});
});

app.post('/post', uploadMiddleware.single('files'), (req, res) => {
    const {originalname, path} = req.file;
    const parts = originalname.split('.');
    const ext = parts[parts.length - 1];
    const newPath = `${path}.${ext}`;
    fs.renameSync(path, newPath);
    res.json({ext});
});

app.listen(process.env.PORT);