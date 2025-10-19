const express = require('express');

const app = express();

//define middle ware function

const myFirstMiddleWare = (req, res, next) => {
    console.log('this first middleware will run on every request');

    next();
};

app.use(myFirstMiddleWare);

app.get('/', (req, res) => {
    res.send('Homepage')
});

app.get('/about', (req, res) => {
    res.send('About page')
});

const port = 3000;
app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});