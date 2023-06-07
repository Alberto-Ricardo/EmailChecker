/*
const express = require("express");
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

const cors = require("cors");
const { format } = require("path");

require('dotenv').config();

const app = express();

app.use(cors({
  origin: 'http://127.0.0.1:5500',
  optionsSuccessStatus: 200,
}));

app.get("/", (req, res) => {
  const xhr = new XMLHttpRequest();
  //let url = `https://emailvalidation.abstractapi.com/v1/?api_key=${process.env.ABSTRACT_API_KEY}&email=richartmorales94@hotmail.com`;

  xhr.open('GET',`https://emailvalidation.abstractapi.com/v1/?api_key=${process.env.ABSTRACT_API_KEY}&email=richartmorales94@hotmail.com`, [true]);
  //xhr.responseType='json';
  //xhr.send();

  xhr.onload = ()=> {
    if (xhr.status != 200) { // error HTTP?
      const data = JSON.parse(xhr.responseText);
      const confidence = data.quality_score;
      const pollo = (data.is_valid_format["text"]);
      res.json({
        confidence,
        pollo,
      });
    } else {
        res.status(xhr.status).send("Error");
    }
  };
  xhr.send();
  //res.json(data);
  res.send(`
  <html>
    <head>
      <title>Email Validation</title>
    </head>
    <body>
      <h1>Email Validation</h1>
      <p>The email address is valid and has a confidence score of ${pollo} .</p>
      <p>The format of the email address is .</p>
    </body>
  </html>
`);
});


//app.listen(process.env.PORT);

app.listen(3000, () => {
  console.log("App listening on port 3000");
});

*/