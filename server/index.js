const express = require('express');
const connectDb = require("./DB/Connect");
const bodyParser = require('body-parser');
const cors = require('cors');
// const Beauty = require('./Pages/Beautypro');


// add a stripe key
const stripe = require('stripe')("sk_test_51PIkTWSIoegrYwWK0OKVuJPhNJ4pxsWsR9dtBXWVJ85b2uJGlYowDkyCtZA1NYuHoxRhYA6tZFMNtAGcPV8He6wJ00FewUhuTE");
const { v4: uuidv4 } = require('uuid');


const app = express();
app.use(bodyParser.json());
// connectDb();

// middle ware
app.use(express.json());
app.use(cors()); 

// routes
app.get('/', (req, res) => {
    res.send("IT WORKS AT LEARNCODEONLINE");
});

app.post('/Payment', (req, res) => {
    const {product, token} = req.body;
    console.log("PRODUCT", product);
    console.log("PRICE", product.price);
    // const idempontencyKey = uuid()

    return stripe.customers.create({
        email: token.email,
        source: token.id,
    }).then(customer => {
         stripe.charges.create({
        //     amount: product.price * 100,
        //     currency: 'usd',
        //     customer: customer.id,
        //     receipt_email: token.email,
            // description: `purchase of product.name`,
            // shipping: {
            //     name: token.card.name,
            //     address: {
            //         country: token.card.address_country
            //     }
            // }
        // }, {idempontencyKey})
        amount: product.price * 100,
            currency: "LKR",
            customer: customer.id,
            receipt_email: token.email,
            description: `purchase of ${product.name}`,
            shipping: {
                name: token.card.name,
                address: {
                    country: token.card.address_country,
                }
            }
        }, 
        // { idempotencyKey }
    );
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err) )
})

// listen
// app.listen(3002, () => console.log("LISTENING AT PORT 3002"));


connectDb()

// console.log("Hello")



