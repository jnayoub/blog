const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '..', 'client')));
app.use(express.json());

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});

app.get('/', (req, res) => {
res.sendFile(path.join(__dirname, '..','client','pages','index.html'));
});