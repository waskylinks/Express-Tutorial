const express = require('express');

const app = express();

//root route
app.get('/', (req, res) => {
    res.send('Welcome to the Home page');
})

const port = 3000;
app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});

// to get all products
app.get('/products', (req, res) => {
    const products = [{ 
        id: 1, 
        name: 'Product A', 
        Price: '$10'
    },{ 
        id: 2, 
        name: 'Product B', 
        Price: '$20'
    }]
    res.json(products);
});

// to get a single product by id
app.get('/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const products = [{ 
        id: 1, 
        name: 'Product A', 
        Price: '$10'
    },{ 
        id: 2, 
        name: 'Product B', 
        Price: '$20'
    }];
    const getSingleProduct = products.find(p => p.id === productId);
    if (getSingleProduct) {
        res.json(getSingleProduct);
    } else {
        res.status(404).json({ 404: 'Product not found'});
    }
});

