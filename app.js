
// const express = require('express');
const express = require('express');
const fs = require('fs');

const _ = fs.readFile('./ptc-76-ticketed-pinky.json', (err, data) => {
  if (err) throw err;
  const ptcdata = JSON.parse(data);
  console.log(ptcdata);
});

const app = express();

app.get('/', (request, response) => {
  response.send('Hello world!');
});

const logit = () => {
  console.log('Hello world app listening on port 3000');
};

app.listen(3000, logit());
