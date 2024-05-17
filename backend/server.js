const express = require('express');
const cors = require('cors');


const app = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

// routes

app.use("/", (req, res, next) => {
  res.send({message: "HEllo World!"});
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});