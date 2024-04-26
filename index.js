const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require('./routes/user_route');
const dotenv = require('dotenv');
require('./db/db');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
dotenv.config();

app.use('/user',userRoute);

app.listen(5000);