
// const express = require('express');
import express from 'express';

const app = express();

app.get('/', (request, response) => {
  response.send('Hello world!');
});

const logit = () => {
  console.log('Hello world app listening on port 3000');
};

app.listen(3000, logit());
