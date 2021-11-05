const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const port = process.env.PORT || 5000;
app.use(cors());
const { MongoClient } = require('mongodb');

// Mongodb config
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@sandbox.5jrgy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/', (req, res) => {
  res.send('Hello Doctor Server!');
});

app.listen(port, () => {
  console.log(`app listening at:${port}`);
});
