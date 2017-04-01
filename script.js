const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const port = 3000;
let db;

app.use(bodyParser.urlencoded({encode: true, extended: true}));

MongoClient.connect('mongodb://BartKK1:klopik12@ds147510.mlab.com:47510/coderspro', (err, res) => {
  if(err) {
    return console.error(err);
  }
  db = res;
  app.listen(port, () => {
    console.log(`Server is up and running on port ${port}`);
  });
});

app.get('/', (req, res) => {
console.log(__dirname);
  res.sendFile(__dirname+'/index.html')
});

app.post('/titles', (req, res) => {
  console.log('Wait for titles');
});
