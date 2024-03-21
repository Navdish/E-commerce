const express = require('express');
const cors = require('cors');
require("dotenv").config();
const Consumer = require('./worker/consumer.js');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

require('./config/mongoDB');
const channel = require('./config/rabbitMQ');
app.use("/", require("./routes"));

const consumer = new Consumer();
consumer.consumeMsg();

app.listen(process.env.PORT, function () {
    console.log(`server running at ${process.env.PORT}`);
})