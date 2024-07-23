var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const fetch = require('node-fetch');
dotenv.config();

const app = express();

const cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('dist'))

console.log(__dirname);

// Variables for url and api key
app.get('/', function (req, res) {
    res.sendFile("dist/index.html");
});

// POST Route
app.post('/api', async (req, res) => {
    const urlWeb = req.body;
    const response = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=en&of=json&url=${urlWeb.url}`);
    try {
        const data = await response.json();
        res.send(data);
        console.log(data);
    } catch (error) {
        console.log("Error",error);
    }
})

// Designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});


