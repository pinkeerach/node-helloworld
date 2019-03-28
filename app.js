
// const express = require('express');
const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.get('/geoevents', (req, res) => {
  const _ = fs.readFile(__dirname + '/geoevents.json', (err, data) => {
    if (err) throw err;
    const ptcdata = JSON.parse(data);
    let firstUserID = ptcdata.geo_events[0].user_id;
    console.log('First geoevent user id: ' + firstUserID);

    res.send({"userID1" : firstUserID});
  });  
});

app.get('/addnumbers', (req, res) => {
  res.send('Operation not yet implemented.')
});

app.get('/jurisdictions', (req, res) => {
  const _ = fs.readFile(__dirname + '/jurisdictions.json', (err, data) => {
    if (err) throw err;

    const jurisdictions = JSON.parse(data);
    
    res.send(jurisdictions);
  });
});

const logit = () => {
  console.log('Hello world app listening on port 3000');
};

app.listen(3000, logit());
