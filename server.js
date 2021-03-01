// const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;
// const server = http.createServer();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.get("/" , (req , res) => {
    res.json({
        message: "API DAGODIY"
    });
});
app.listen(port, () => {
    console.log("SERVER RUNNING ON PORT : "+port);
});
// server.listen(port);
