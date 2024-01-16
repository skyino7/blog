const express = require('express');
const cors = require('cors');
const { mongoose } = require('mongoose');
const User = require('./models/User')
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://blog:3YHeXFSTUD0DepVC@cluster0.1h0enes.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', async (req, res) => {
    const {Username, Password} = req.body;
    try{
        const userDoc = await User.create({Username, Password});
        res.json(userDoc);
    } catch(e) {
        res.status(400).json(e);
    }

});

app.listen(4000);