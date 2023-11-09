const express = require('express'); 
const bodyParser = require('body-parser');
// create express app 
const app = express();
// Siapkan port server 
const port = process.env.PORT || 5000;
// parse content type request - application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true }))
// parse content type request - application/json 
app.use(bodyParser.json())
// tentukan rute root 
app.get('/', (req, res) => { 
  res.send("Hello World"); 
});
// listen for requests 
app.listen(port, () => { 
  console.log(`Server listening on port ${port}`); 
});