const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const http = require('http');

const routes = require('./routes');

const app = express();
const server = http.Server(app);

mongoose.connect('mongodb+srv://teste:teste123@cluster0-lwdhu.mongodb.net/dbdogbreeds?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(2222);