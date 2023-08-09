const express = require('express');
const app = express();
const path = require('path');

const dotenv = require('dotenv').config();

const cors = require("cors");
app.use(
  cors({
    origin: "*",
  })
);

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '..', 'client')));
app.use(express.json());


const commentRouter = require('./routes/commentRouter');
app.use('/comments', commentRouter);
app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '..','client','pages','index.html'));
});

app.listen(process.env.PORT, () => {
    console.log('Example app listening on port ' + process.env.PORT);
});