const express = require('express'); //Line 1
const app = express(); //Line 2
const port = process.env.PORT || 5000; //Line 3
const axios = require('axios')
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// This displays message that the server running and listening to specified port
app.listen(port, () => console.log(`Listening on port ${port}`)); //Line 6

// create a GET route
app.get('/food/:searchPhrase', (req, res) => { 
  console.log('req.params', req.params)
  axios.get(
    `https://api.edamam.com/api/food-database/v2/parser?app_id=c085da12&app_key=5a90344ed5dd2529c7369b64fa4c5b43&ingr=${req.params.searchPhrase}&nutrition-type=cooking&category=generic-foods`
  ).then((response) => {
    console.log("the response:", response.data.parsed[0].food);
    res.send({ food: response.data.parsed[0].food });
  })
});