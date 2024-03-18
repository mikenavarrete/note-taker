const express = require('express');
const path = require ('path');
const app = express();

const PORT = 80

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));


app.listen(PORT, () => {
    console.log(`http://localhost`)
})