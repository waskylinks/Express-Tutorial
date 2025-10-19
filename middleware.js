const express = require('express');

const app = express();

//define middle ware function

const myFirstMiddleWare = (req, res, next) => {
    console.log('this first middleware will run on every request');

    next();
};

app.use(myFirstMiddleWare);

// Route handlers
app.get('/', (req, res) => {
  res.json('Homepage');
});

app.get('/about', (req, res) => {
  res.json('About page');
});

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});