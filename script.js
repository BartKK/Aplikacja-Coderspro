const express = require('express');

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});


app.get('/', (request, response) => {
response.send('wszystko ok');

});
