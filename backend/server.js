const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

// const database = require('./config/database');
// database.sync({ force: false });

// routes

const recebedores = require('./routes/recebedores')

app.use("/", recebedores);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});