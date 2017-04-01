const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const BookSchema = require('./book');
const app = express();
const port = 3000;
let db;

app.use(bodyParser.urlencoded({encode: true, extended: true}));

app.set('view engine', 'ejs');


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
  db.collection('coderspro').find().toArray((err, result) => {
    res.render('index.ejs', {titles: result});
  });
});

app.post('/titles', (req, res) => {
  const book = new BookSchema;
  book.title = req.body.title;
  book.description = req.body.description;

db.collection('coderspro')
.save(req.body, (err, result) => {
  if (err) {
    return console.error(err)
  }
console.info('Saved to database');
res.redirect('/')
})
});
