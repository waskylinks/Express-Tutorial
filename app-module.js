const express = require('express');

const app = express();

//application level settings
app.set('view engine', 'ejs');

//routing
app.get('/', (req, res) => {
    res.send('Home page')
});

app.post('/apo/data', (req, res) => {
    res.json({
        message: 'Data received',
        data: req.data
    });
});

app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send('Something went wrong')
});