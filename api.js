const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello Hackathon!');
});

app.listen(port, () => console.log(`👽 API listening on port ${port}!`));
