const express = require('express');
const app = express();

app.get('/test', (req, res) => {
    res.json('It works')
});

app.listen(4000);