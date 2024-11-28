const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const express = require('express');
const axios = require('axios')
const bodyParser = require('body-parser');

const app = express();

const cors = require('cors');
const { get } = require('https');

app.use(cors());
app.use(bodyParser.json());
app.use(express.text())
app.use(express.static('dist'))


// Variables for url and api key
const apiUrl = 'https://api.meaningcloud.com/sentiment-2.1'
const apiKey = process.env.API_KEY



async function getSentiment(text) {
    try {
        const data = {
            key: apiKey,
            url: text,
            lang: 'en',  // language of the text
        };
        const response = await axios.post(apiUrl, new URLSearchParams(data), {
            headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
            }
        })
        return response.data 
    } catch(err) {
        console.log(err)
    }
}

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

app.post('/api',async function(req, res) {
    const text = req.body 
    const data = await getSentiment(text)
    res.json(data)
})




// POST Route



// Designates what port the app will listen to for incoming requests
app.listen(8000, function () {
    console.log('Example app listening on port 8000!');
});


